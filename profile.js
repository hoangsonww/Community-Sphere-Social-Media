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

        // Upload the avatar file and save the bio text to your server
        // For this example, we'll assume the server-side logic is implemented and focus on updating the UI

        // Update the profile page with the new avatar and bio
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
    // Load the user data from local storage
    const userData = JSON.parse(localStorage.getItem('user'));

    // Fetch the user profile data from your server and update the profile page.
    // For this example, we'll use the data from local storage, but you should fetch the actual data from your server.
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
