/**
 * Handling themes of the application
 */
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    applyTheme(theme);
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function applySavedTheme() {
    const storedTheme = localStorage.getItem('theme') || 'default';
    setTheme(storedTheme);
}

applySavedTheme();