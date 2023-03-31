/**
 * Handling registrations
 */
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        registerUser(username, email, password);
    });

    async function register(username, password, bio, avatar) {
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, bio, avatar })
            });

            if (response.ok) {
                alert('Registration successful');
            } else {
                alert('Registration failed');
            }
        } catch (err) {
            console.error('Error during registration:', err);
            alert('Registration failed');
        }
    }

});