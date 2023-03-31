function createReactionsContainer() {
    const reactions = ['love', 'haha', 'wow', 'sad', 'angry'];
    const reactionsContainer = document.createElement('div');
    reactionsContainer.classList.add('reactions-container');

    reactions.forEach(reaction => {
        const reactionButton = document.createElement('button');
        reactionButton.classList.add('reaction-button');
        reactionButton.textContent = `${reaction} (0)`;
        reactionButton.setAttribute('data-reaction', reaction);
        reactionButton.setAttribute('data-count', 0);
        reactionButton.addEventListener('click', () => {
            let count = parseInt(reactionButton.getAttribute('data-count'), 10);
            count += 1;
            reactionButton.setAttribute('data-count', count);
            reactionButton.textContent = `${reaction} (${count})`;
        });
        reactionsContainer.appendChild(reactionButton);
    });

    return reactionsContainer;
}

document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');

    if (postList) {
        const posts = [
            { author: 'John Doe', content: 'This is a test post.', timestamp: '2023-04-01 12:34:56' },
            { author: 'Jane Doe', content: 'This is another test post.', timestamp: '2023-04-01 12:35:56' },
        ];

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.author}</h3>
                <p>${post.content}</p>
                <small>${post.timestamp}</small>
            `;

            const likeButton = document.createElement('button');
            likeButton.textContent = 'Like (0)';
            likeButton.setAttribute('data-count', 0);
            likeButton.addEventListener('click', () => {
                let count = parseInt(likeButton.getAttribute('data-count'), 10);
                count += 1;
                likeButton.setAttribute('data-count', count);
                likeButton.textContent = `Like (${count})`;
            });
            postElement.appendChild(likeButton);

            postElement.appendChild(createReactionsContainer());
            postList.appendChild(postElement);
        });
    }

});
