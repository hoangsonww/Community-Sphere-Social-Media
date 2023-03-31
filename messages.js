/**
 * Handling messages of users
 */
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const messageButton = document.getElementById('message-button');
    const messageInput = document.getElementById('message-input');
    const messagesList = document.getElementById('messages-list');

    messageButton.addEventListener('click', function() {
        window.location.href = "messages.html";
    });

    // Load the user's messages
    loadMessages();

    // Handle sending a message
    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        sendMessage();
    });

    function loadMessages() {
        // Fetch the messages data from your server based on the user data and the recipient
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

document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendMessageButton = document.getElementById('send-message-button');
    const messageList = document.getElementById('message-list');

    function displayMessage(sender, message) {
        const messageItem = document.createElement('li');

        const senderName = document.createElement('div');
        senderName.textContent = sender;
        senderName.style.fontWeight = 'bold';
        messageItem.appendChild(senderName);

        const messageContent = document.createElement('div');
        messageContent.textContent = message;
        messageItem.appendChild(messageContent);

        messageList.appendChild(messageItem);
        messageList.scrollTop = messageList.scrollHeight;
    }

    sendMessageButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message.trim()) {
            displayMessage('You', message); // Pass 'You' as the sender name
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessageButton.click();
        }
    });

});
