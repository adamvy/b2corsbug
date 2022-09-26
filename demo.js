window.onload = function() {
    let url = 'https://matrix.beeper.com/_matrix/media/r0/download/beeper.com/40adaf1f9c3e98348324b22126d342643fb19bea?allow_redirect=true';

    url = 'https://s3.eu-central-003.backblazeb2.com/media-repo-local-9admzkepyexo2g13/546/d2deec506fc41a01639030b346fe8bc728b3a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=003050100938017000000000b%2F20220921%2Feu-central-003%2Fs3%2Faws4_request&X-Amz-Date=20220921T013148Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22test.jpg%22&X-Amz-Signature=1727fb7f8012bd20c157ec8297d66d7b276daa23b8369c1ecc321a59ba511d0d'

    url = 'https://adamvy-test-bucket-2.s3.us-west-000.backblazeb2.com/test.jpg'
    
    //url = `https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z359635509d4b5dd08531081a_f119225bb63634de9_d20220921_m010614_c000_v0001406_t0000_u01663722374352`;
    
    let image = new Image();
    image.src = url;
    document.body.appendChild(image);

    let loading = document.createTextNode('loading...');
    document.body.append(loading);
    setTimeout(() => {
        fetch(url)
            .then((resp) => resp.blob())
            .then((blob) => {
                loading.remove();
                let image = new Image();
                image.src = URL.createObjectURL(blob);
                document.body.appendChild(image);
            })
            .catch((e) => {
                loading.remove();
                document.body.append('' + e);
                document.body.append("check devtools for the network error, but be sure to keep caching enabled");
            });
    }, 100);
}
