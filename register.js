// register.js

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        registerUser(username, email, password);
    });

    function registerUser(username, email, password) {
        // Here, you'll need to send the user data to your server and store it in the database.
        // For the sake of this example, we'll just log the data to the console.
        console.log('User data:', { username, email, password });

        // Show a success message or redirect to the home page after successful registration.
        alert('Registration successful! Redirecting to the home page...');
        window.location.href = 'index.html';
        localStorage.setItem('user', JSON.stringify({ username, email, joined: new Date().toISOString() }));
    }
});
