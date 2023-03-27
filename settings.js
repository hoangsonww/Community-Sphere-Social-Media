// settings.js

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
