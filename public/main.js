const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors()); // Enable CORS for all routes

// Set up storage using multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads/')) // Ensure the 'uploads/' directory exists
    },
    filename: function (req, file, cb) {
        // Use the original file name in the uploads directory
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle file upload POST request
app.post('/upload', upload.single('video'), (req, res) => {
    // Video file is now saved in the 'uploads' directory
    // Here you can call the audio extraction function
    console.log(`Received file ${req.file.originalname}`); // Log file information
    res.json({ message: 'File uploaded successfully.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
