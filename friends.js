

document.addEventListener('DOMContentLoaded', () => {
    const friendsList = document.getElementById('friends-list');
    loadFriends();

    function loadFriends() {
        // Fetch the friends data from your server based on the user data.
        // For this example, we'll use an empty array, but you should fetch the actual data from your server.
        const friends = [];

        if (friends.length === 0) {
            const noFriendsMessage = document.createElement('p');
            noFriendsMessage.textContent = "You don't have any friends yet.";
            friendsList.appendChild(noFriendsMessage);
        } else {
            friends.forEach(friend => {
                const friendElement = document.createElement('div');
                friendElement.classList.add('friend');
                friendElement.innerHTML = `
                    <img src="${friend.avatarUrl}" alt="${friend.username}'s avatar" class="friend-avatar">
                    <h3>${friend.username}</h3>
                `;
                friendsList.appendChild(friendElement);
            });
        }
    }
});

