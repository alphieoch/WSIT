const ffmpeg = require('fluent-ffmpeg');

function extractAudioFromVideo(videoFilePath, outputAudioFilePath) {
    return new Promise((resolve, reject) => {
        ffmpeg(videoFilePath)
            .output(outputAudioFilePath)
            .audioCodec('libmp3lame')
            .on('end', function() {
                console.log('Audio extraction completed.');
                resolve(outputAudioFilePath);
            })
            .on('error', function(err) {
                console.error('Error:', err);
                reject(err);
            })
            .run();
    });
}

module.exports = extractAudioFromVideo;
