const express = require('express');
const router = express.Router();
const extractAudioFromVideo = require('../utilites/audioExtractor');

router.post('/upload-video', (req, res) => {
    // Assuming you have the video file path and output path
    let videoFilePath = 'path/to/video.mp4';
    let outputAudioFilePath = 'path/to/output/audio.mp3';

    extractAudioFromVideo(videoFilePath, outputAudioFilePath)
        .then(audioPath => {
            res.send(`Audio extracted and saved to: ${audioPath}`);
        })
        .catch(error => {
            res.status(500).send('Error during audio extraction');
        });
});

module.exports = router;
