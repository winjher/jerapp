const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let messages = []; // This will temporarily store messages

app.post('/send', (req, res) => {
    const message = req.body.message;
    messages.push(message);
    res.json({ status: 'Message sent' });
});

app.get('/inbox', (req, res) => {
    res.json(messages);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

