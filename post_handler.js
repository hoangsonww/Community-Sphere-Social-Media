document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');

    if (postForm) {
        postForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const postContent = document.getElementById('post-content').value;
            addPostToPage(postContent);
        });
    }
});

function createPostElement(postContent) {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    const contentElement = document.createElement('p');
    contentElement.textContent = postContent;
    postElement.appendChild(contentElement);

    return postElement;
}

function addPostToPage(postContent) {
    const postElement = createPostElement(postContent);
    const postListElement = document.getElementById('post-list');
    postListElement.appendChild(postElement);
}

