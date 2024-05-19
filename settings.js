/**
 * Handling setting buttons / options
 */
document.addEventListener('DOMContentLoaded', () => {
    const settingsForm = document.getElementById('settings-form');
    const themeSelector = document.getElementById('theme-selector');

    // Load the saved theme from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeSelector.value = savedTheme;
    }

    // Save the selected theme to local storage
    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedTheme = themeSelector.value;
        localStorage.setItem('theme', selectedTheme);
        document.documentElement.setAttribute('data-theme', selectedTheme);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const settingsForm = document.getElementById('settings-form');

    // Populate the form with the user's current settings
    loadCurrentSettings();

    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        saveSettings();
    });

    function loadCurrentSettings() {
        const themeSelector = document.getElementById('theme-selector');
        themeSelector.value = localStorage.getItem('theme') || 'light';
        const currentUser = {
            displayName: 'JohnDoe',
            email: 'johndoe@example.com',
            password: 'password123',
        };
        document.getElementById('display-name').value = currentUser.displayName;
        document.getElementById('email').value = currentUser.email;
        document.getElementById('password').value = currentUser.password;
        document.getElementById('confirm-password').value = currentUser.password;
        localStorage.setItem('theme', themeSelector.value);
    }

    function saveSettings() {
        localStorage.setItem('theme', themeSelector.value);
        applyTheme(themeSelector.value);
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        alert('Your settings have been saved.');
    }
});
