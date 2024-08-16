
// Create a download link element
const link = document.createElement('a');
link.href = imageURL;

// Set the download attribute and file name
link.download = 'snap_photo.jpg';

// Simulate a click on the link to trigger the download
link.click();

const express = require('express');
const multer = require('multer');

const app = express();

// Set up Multer storage and destination for uploaded files
const storage = multer.diskStorage({
  destination: 'collections', // Specify the destination folder
  filename: function (req, file, cb) {
    // Use a timestamp or unique ID for the filename to avoid conflicts
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create an instance of the Multer middleware
const upload = multer({ storage: storage });

// Define the endpoint to handle the file upload
app.post('/api/upload', upload.single('photo'), (req, res) => {
  // The uploaded file is now saved in the desired folder
  res.status(200).json({ message: 'Photo saved successfully' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
