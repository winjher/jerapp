const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/butterflyDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for the uploads
const uploadSchema = new mongoose.Schema({
    uploaderName: String,
    uploadReferenceID: String,
    commonName: String,
    percentage: String,
    uploadImage: String,
    size: Number,
    mimeType: String,
    lastModified: Number,
    content: String,
    date: String
});

const Upload = mongoose.model('Upload', uploadSchema);

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Routes
app.post('/upload', upload.single('uploadImage'), (req, res) => {
    const newUpload = new Upload({
        uploaderName: req.body.uploaderName,
        uploadReferenceID: req.body.uploadReferenceID,
        commonName: req.body.commonName,
        percentage: req.body.percentage,
        uploadImage: req.file.filename,
        size: req.file.size,
        mimeType: req.file.mimetype,
        lastModified: req.file.lastModified,
        content: req.body.content,
        date: req.body.date
    });

    newUpload.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('File uploaded and saved to database successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
