const postForm = document.getElementById('post-form');

if (postForm) {
    postForm.onsubmit = (e) => {
        e.preventDefault();

        const postContent = document.getElementById('post-content').value;
        addPostToPage(postContent);
        document.getElementById('post-content').value = ''; // Clear the textarea after submitting
    };
}

function createPostElement(postContent) {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    const contentElement = document.createElement('p');
    contentElement.textContent = postContent;
    postElement.appendChild(contentElement);

    // Add reaction buttons
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.className = 'like-btn';
    postElement.appendChild(likeButton);

    const loveButton = document.createElement('button');
    loveButton.textContent = 'Love';
    loveButton.className = 'love-btn';
    postElement.appendChild(loveButton);

    const laughButton = document.createElement('button');
    laughButton.textContent = 'Laugh';
    laughButton.className = 'laugh-btn';
    postElement.appendChild(laughButton);

    return postElement;
}

function addPostToPage(postContent) {
    const postElement = createPostElement(postContent);
    const postListElement = document.getElementById('post-list');
    postListElement.appendChild(postElement);
}
