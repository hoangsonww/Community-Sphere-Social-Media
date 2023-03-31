/**
 * Handling general application events
 */

// Define some sample data
let users = [
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123" },
    { id: 2, name: "Bob", email: "bob@example.com", password: "password456" },
    { id: 3, name: "Charlie", email: "charlie@example.com", password: "password789" }
];

let posts = [
    { id: 1, userId: 1, content: "Just had the best day ever!", timestamp: new Date() },
    { id: 2, userId: 2, content: "Can't wait for the weekend!", timestamp: new Date() },
    { id: 3, userId: 3, content: "Feeling blessed today!", timestamp: new Date() }
];

// Get references to HTML elements
let postForm = document.getElementById("post-form");
let postContent = document.getElementById("post-content");
let postButton = document.getElementById("post-button");
let postList = document.getElementById("post-list");

// Add event listener to post form
postForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Create a new post object and add it to the posts array
    let newPost = {
        id: posts.length + 1,
        userId: 1, // This would eventually be the ID of the currently logged-in user
        content: postContent.value,
        timestamp: new Date()
    };
    posts.push(newPost);
    // Reset the form and update the post list
    postContent.value = "";
    updatePostList();
});

// Function to update the post list
function updatePostList() {
    // Clear the post list
    postList.innerHTML = "";
    // Loop through each post and create a new HTML element for it
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let user = getUserById(post.userId);
        let postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<div class="post-header"> <img src="${getUserImage(user)}" alt="${user.name}"> <div class="post-header-info"> <h3>${user.name}</h3> <p>${post.timestamp.toLocaleString()}</p> </div> </div> <div class="post-content"> <p>${post.content}</p> </div> ;
    postList.appendChild(postElement)`;
    }
}

function getUserById(userId) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.id === userId) {
            return user;
        }
    }
    return null;
}

// Function to get the image URL for a user
function getUserImage(user) {
    // This would eventually get the image URL from a database or API
    return `https://via.placeholder.com/50x50?text=${user.name}`;
}

// Call the updatePostList function to display the initial set of posts
updatePostList();

document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('post-button');
    const postContent = document.getElementById('post-content');
    const postList = document.getElementById('post-list');

    postButton.addEventListener('click', () => {
        createPost(postContent.value);
        postContent.value = '';
    });

    function createPost(content) {
        if (content.trim() !== '') {
            const post = document.createElement('div');
            post.classList.add('post');
            post.innerHTML = `<p>${content}</p>`;
            postList.prepend(post);
        } else {
            alert('Please enter some content for your post.');
        }
    }
});

function addPostToUI(post) {
    // ...
    const likeButton = postElement.querySelector('.like-button');
    const likeCount = postElement.querySelector('.like-count');

    likeButton.addEventListener('click', () => {
        likePost(post, likeCount);
    });

    postList.appendChild(postElement);
}

function likePost(post, likeCountElement) {
    post.likes += 1;
    likeCountElement.textContent = post.likes;
}

const users = [
    {
        id: 1,
        username: 'user1',
        friends: [],
    },
    {
        id: 2,
        username: 'user2',
        friends: [],
    },
    {
        id: 3,
        username: 'user3',
        friends: [],
    },
];

const currentUser = users[0];

// Search users
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = '';

    if (searchTerm) {
        const matchedUsers = users.filter(
            (user) =>
                user.username.toLowerCase().includes(searchTerm) &&
                user.id !== currentUser.id
        );

        for (const user of matchedUsers) {
            const resultElement = document.createElement('li');
            resultElement.textContent = user.username;
            resultElement.classList.add('search-result');

            resultElement.addEventListener('click', () => {
                addFriend(user);
            });

            searchResults.appendChild(resultElement);
        }
    }
});

function addFriend(user) {
    if (!currentUser.friends.includes(user.id)) {
        currentUser.friends.push(user.id);
        alert(`Added ${user.username} as a friend!`);
    }
    else {
        alert(`You are already friends with ${user.username}`);
    }
}

function addPostToUI(post) {
    // ...
    const commentsList = postElement.querySelector('.comments-list');
    const commentInput = postElement.querySelector('.comment-input');

    post.comments.forEach((comment) => {
        addCommentToUI(comment, commentsList);
    });

    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const commentContent = commentInput.value.trim();

            if (commentContent) {
                const comment = {
                    postId: post.id,
                    author: currentUser.username,
                    content: commentContent,
                    timestamp: new Date(),
                };

                post.comments.push(comment);
                addCommentToUI(comment, commentsList);
                commentInput.value = '';
            }
        }
    });

    // ...
}

function addCommentToUI(comment, commentsList) {
    const commentElement = document.createElement('li');
    commentElement.textContent = `${comment.author}: ${comment.content}`;
    commentsList.appendChild(commentElement);
}

const settingsButton = document.querySelector('nav ul li:nth-child(4) a');
const settingsSection = document.getElementById('settings-section');
const themeSelect = document.getElementById('theme-select');

settingsButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (settingsSection.style.display === 'none') {
        settingsSection.style.display = 'block';
    } else {
        settingsSection.style.display = 'none';
    }
});

themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('login-form');

loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // For this example, we'll just display a message.
    // In a real application, you would need to authenticate the user
    // against a backend server and handle user sessions.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Logged in successfully!');
        loginModal.style.display = 'none';
    } else {
        alert('Please enter a valid username and password.');
    }
});

const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('login-form');

loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // For this example, we'll just display a message.
    // In a real application, you would need to authenticate the user
    // against a backend server and handle user sessions.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Logged in successfully!');
        loginModal.style.display = 'none';
    } else {
        alert('Please enter a valid username and password.');
    }
});

const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // For this example, we'll just display a message.
        // In a real application, you would need to authenticate the user
        // against a backend server and handle user sessions.
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            alert('Logged in successfully!');
        } else {
            alert('Please enter a valid username and password.');
        }
    });
}

const messageButton = document.getElementById('message-button');

if (messageButton) {
    messageButton.addEventListener('click', () => {
        window.location.href = "messages.html";
    });
}

async function register(username, password) {
    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert('Registration successful');
        } else {
            alert('Registration failed');
        }
    }
    catch (err) {
        console.error('Error during registration:', err);
        alert('Registration failed');
    }
}

async function login(username, password) {
    const loginMessage = document.getElementById('login-message');

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            loginMessage.style.color = 'green';
            loginMessage.innerText = 'Login successful';

            // Redirect to the user's profile or another page after successful login
            setTimeout(() => {
                window.location.href = '/profile.html';
            }, 2000);
        } else {
            loginMessage.style.color = 'red';
            loginMessage.innerText = 'Invalid username or password';
        }
    } catch (err) {
        console.error('Error during login:', err);
        loginMessage.style.color = 'red';
        loginMessage.innerText = 'Login failed';
    }
}

function applyTheme(theme) {
    if (theme === 'default') {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
    }
    else {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
    }
}

function changeTheme() {
    const themeSelect = document.getElementById('theme-select');
    const selectedTheme = themeSelect.value;

    setTheme(selectedTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});



const registerForm = document.querySelector('#register-form form');
const loginForm = document.querySelector('#login-form form');

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    await register(username, password);
});

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    await login(username, password);
});

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

