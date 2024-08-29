async function sendMessage(message) {
    const response = await fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    });
    const data = await response.json();
    console.log(data);
}

// Example usage
sendMessage('Hello, this is a test message!');