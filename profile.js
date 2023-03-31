/**
 * Handling profile buttons
 */
document.addEventListener('DOMContentLoaded', () => {
    const avatarUpload = document.getElementById('avatar-upload');
    const bioInput = document.getElementById('bio-input');
    const profileForm = document.getElementById('profile-form');

    loadUserProfile();

    // Handle the profile form submission
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        saveProfileChanges();
    });

    // ...

    function saveProfileChanges() {
        const avatarFile = avatarUpload.files[0];
        const bioText = bioInput.value;

        if (avatarFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const avatarImg = document.getElementById('avatar');
                avatarImg.src = event.target.result;
            };
            reader.readAsDataURL(avatarFile);
        }

        if (bioText) {
            const bioElement = document.getElementById('bio');
            bioElement.textContent = bioText;
        }
    }
});

function loadUserProfile() {

    const userData = JSON.parse(localStorage.getItem('user'));

    const userProfile = {
        ...userData,
        avatarUrl: 'default-avatar.png',
    };

    updateProfilePage(userProfile);
}

function updateProfilePage(userProfile) {
    document.getElementById('user-name').textContent = userProfile.username;
    document.getElementById('user-email').textContent = userProfile.email;
    document.getElementById('user-joined').textContent = userProfile.joined;
    document.getElementById('user-avatar').src = userProfile.avatarUrl;
}