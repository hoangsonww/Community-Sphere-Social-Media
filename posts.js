/**
 * Handling post buttons
 */
document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postContent = document.getElementById('post-content');
    const postList = document.getElementById('post-list');

    loadPosts();

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createPost();
    });

    function loadPosts() {
        posts.forEach(post => {
            addPostToUI(post);
        });
    }

    function createPost() {
        const postText = postContent.value;
        const postImageInput = document.getElementById('post-image');
        const postImage = postImageInput.files[0];

        if (postText.trim() || postImage) {
            const newPost = { author: 'You', content: postText, image: null };

            if (postImage) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    newPost.image = event.target.result;
                    addPostToUI(newPost);
                };
                reader.readAsDataURL(postImage);
            } else {
                addPostToUI(newPost);
            }

            postContent.value = '';
            postImageInput.value = '';
        }
    }

    function addPostToUI(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const authorElement = document.createElement('h3');
        authorElement.innerText = post.author;

        const contentElement = document.createElement('p');
        contentElement.innerText = post.content;

        postElement.appendChild(authorElement);
        postElement.appendChild(contentElement);

        if (post.image) {
            const imageElement = document.createElement('img');
            imageElement.src = post.image;
            imageElement.alt = 'User uploaded image';
            imageElement.style.maxWidth = '100%';
            postElement.appendChild(imageElement);
        }

        const likeContainer = document.createElement('div');
        const likeButton = document.createElement('button');
        const likeCount = document.createElement('span');

        likeButton.innerText = 'Like';
        likeButton.classList.add('like-button');
        likeCount.classList.add('like-count');
        likeCount.innerText = post.likes || 0;

        likeContainer.appendChild(likeButton);
        likeContainer.appendChild(likeCount);
        postElement.appendChild(likeContainer);

        // Add an event listener to the like button
        likeButton.addEventListener('click', () => {
            post.likes = (post.likes || 0) + 1;
            likeCount.innerText = post.likes;
        });

        postList.insertBefore(postElement, postList.firstChild);
    }
});

function createPostElement(post) {
    const reactions = ['love', 'haha', 'wow', 'sad', 'angry'];
    const reactionsContainer = document.createElement('div');
    reactionsContainer.classList.add('reactions-container');

    reactions.forEach(reaction => {
        const reactionButton = document.createElement('button');
        reactionButton.classList.add('reaction-button');
        reactionButton.textContent = reaction;
        reactionButton.addEventListener('click', () => {
            alert(`You reacted with ${reaction} to this post.`);
        });
        reactionsContainer.appendChild(reactionButton);
    });

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
        // Update your back-end here to record the like
    });
    postElement.appendChild(likeButton);

    postElement.appendChild(createReactionsContainer());
    postList.appendChild(postElement);
}
