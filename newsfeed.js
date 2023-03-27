// newsfeed.js

document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    loadNewsfeed();

    function loadNewsfeed() {
        // Fetch the newsfeed data from your server based on the user data.
        // For this example, we'll use static data, but you should fetch the actual data from your server.
        const newsfeedPosts = [
            { author: 'JaneDoe', content: 'Hello, world!' },
            { author: 'JohnDoe', content: 'This is my first post on this platform!' },
        ];

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
