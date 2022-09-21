window.onload = function() {
    let url = 'https://matrix.beeper.com/_matrix/media/r0/download/beeper.com/40adaf1f9c3e98348324b22126d342643fb19bea?allow_redirect=true'
    let image = new Image();
    image.src = url;
    document.body.appendChild(image);

    fetch(url)
        .then((resp) => resp.blob())
        .then((blob) => {
            let image = new Image();
            image.src = URL.createObjectURL(blob);
            document.body.appendChild(image);
        })
        .catch((e) => {
            document.body.append('' + e);
        });
}
