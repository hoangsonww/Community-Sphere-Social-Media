/**
 * Handling friends events
 */
document.addEventListener('DOMContentLoaded', () => {
    const friendsList = document.getElementById('friends-list');
    loadFriends();

    function loadFriends() {

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
