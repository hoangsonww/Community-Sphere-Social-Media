const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hoangson09112004@',
    database: 'mySQL'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, hashedPassword], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Server error');
            return;
        }
        res.status(200).send('User registered');
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).send('Server error');
            return;
        }

        if (results.length === 0) {
            res.status(401).send('Invalid username or password');
            return;
        }

        const user = results[0];
        const passwordValid = await bcrypt.compare(password, user.password);

        if (!passwordValid) {
            res.status(401).send('Invalid username or password');
            return;
        }

        res.status(200).send('Login successful');
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/register', async (req, res) => {
    const { username, password, bio, avatar } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const createProfileQuery = 'INSERT INTO profiles (user_id, bio, avatar) VALUES (?, ?, ?)';

    db.beginTransaction(async (err) => {
        if (err) {
            console.error('Error starting transaction:', err);
            res.status(500).send('Server error');
            return;
        }

        try {
            const [userResult] = await db.query(createUserQuery, [username, hashedPassword]);
            await db.query(createProfileQuery, [userResult.insertId, bio, avatar]);
            db.commit();

            res.status(200).send('User registered');
        } catch (err) {
            console.error('Error inserting user and profile:', err);
            db.rollback();
            res.status(500).send('Server error');
        }
    });
});
