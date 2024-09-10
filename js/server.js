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

//save task
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

