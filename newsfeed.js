/**
 * Handling newsfeed events
 */
document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    loadNewsfeed();

    function loadNewsfeed() {

        newsfeedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.author}</h3>
                <p>${post.content}</p>
            `;
            postList.appendChild(postElement);
        });
    }
});