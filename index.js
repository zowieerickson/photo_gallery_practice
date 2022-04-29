async function getPhotos() {
    const response = await fetch("photos.json");
    const photos = await response.json();
    return photos
}

/*    
       Create a new img and place it, centered, above my-photos
        -This should be hidden initially
        -Also give it the my-photo class
    
       Create a "click" event for each photo in my-photos
        -When clicked, load the clicked photo into the new img tag
*/

function getPhotosHtml(photos) {
    let photosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}" />`
    }).join('')

    return `<div class="my-photos">${photosHtml}</div>`
}

getPhotos().then(photos => {
    document.body.innerHTML = `
    <div class="my-gallery">
        <img class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/1/200/200" />
        ${getPhotosHtml(photos)}
    </div>`;
    const myPhotoImgs = Array.from(document.querySelectorAll('.my-photo'));

    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", e => {
            console.log(e.target)
        })
    })
    console.log(myPhotoImgs)
    
})
