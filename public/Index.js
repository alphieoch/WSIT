document.addEventListener('DOMContentLoaded', function () {
    var dropZone = document.getElementById('drop-zone');

    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        dropZone.classList.add('highlight');
    });

    dropZone.addEventListener('dragleave', function(e) {
        e.preventDefault();
        dropZone.classList.remove('highlight');
    });

    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        dropZone.classList.remove('highlight');
        var files = e.dataTransfer.files;
        if(files.length > 0) {
            var formData = new FormData();
            formData.append('video', files[0]);

            fetch('/upload', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                // Process the response data here
            }).catch(err => {
                console.error(err);
            });
        }
    });
});
