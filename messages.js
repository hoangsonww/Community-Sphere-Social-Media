// messages.js

document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messagesList = document.getElementById('messages-list');

    // Load the user's messages
    loadMessages();

    // Handle sending a message
    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        sendMessage();
    });

    function loadMessages() {
        // Fetch the messages data from your server based on the user data and the recipient
        // For this example, we'll use static data, but you should fetch the actual data from your server.
        const messages = [
            { sender: 'JaneDoe', content: 'Hi!' },
            { sender: 'JohnDoe', content: 'Hello!' },
        ];

        messages.forEach(message => {
            addMessageToUI(message);
        });
    }

    function sendMessage() {
        const messageContent = messageInput.value;

        if (messageContent.trim()) {
            // Send the message to your server and save it to the database
            // For this example, we'll focus on updating the UI and assume the server-side logic is implemented

            // Update the UI with the new message
            addMessageToUI({ sender: 'You', content: messageContent });
            messageInput.value = '';
        }
    }

    function addMessageToUI(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <h4>${message.sender}</h4>
            <p>${message.content}</p>
        `;
        messagesList.appendChild(messageElement);
        messagesList.scrollTop = messagesList.scrollHeight;
    }
});
