async function getPhotos() {
    const response = await fetch("photos.json");
    const photos = await response.json();
    return photos
}

function getPhotosHtml(photos) {
    let photosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}" />`
    }).join('')

    return `<div class="my-photos">${photosHtml}</div>`
}

getPhotos().then(photos => {
    document.body.innerHTML = `
    <div class="my-gallery">
        <img class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/3/200/200" />
        ${getPhotosHtml(photos)}
    </div>`;
    const myPhotoImgs = Array.from(document.querySelectorAll('.my-photo'));

    myPhotoImgs.forEach(photoImg => {
        // Clicking on photo will display it as top image
        photoImg.addEventListener("click", e => {
            let imgSrc = e.target.src.slice(0, -7);
            // Adjusting the size from 100/100 to 200/200 (height/width) so the image isn't blurred
            let imgSrcLarge = imgSrc + `200/200`;
            const selectedPhoto = document.querySelector("#my-selected-photo");
            selectedPhoto.style.display = 'block';
            selectedPhoto.src = imgSrcLarge;

        })
    })
    console.log(myPhotoImgs)
    
})
