async function getMessages() {
    const response = await fetch('http://localhost:3000/inbox');
    const messages = await response.json();
    console.log(messages);
}

// Example usage
getMessages();