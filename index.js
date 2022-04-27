async function getPhotos() {
    const response = await fetch("photos.json");
    const photos = await response.json();
    return photos
}

getPhotos().then(photos => {
    document.body.innerHTML = `<div class="my-gallery">${getPhotosHtml(photos)}</div>`;
})

/* 
    2. 
       Write a function to create the my-photos Component
       
       Create a Column Flexbox container around my-photos
       
       Create a new img and place it, centered, above my-photos
        -This should be hidden initially
        -Also give it the my-photo class
    
       Create a "click" event for each photo in my-photos
        -When clicked, load the clicked photo into the new img tag
*/

function getPhotosHtml(photos) {
    console.log(photos)
    let photosHtml = photos.map(photo => {
        return `<img src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}" />`
    }).join('')

    console.log(photosHtml)
    // document.body.innerHTML = photosHtml;
    return `<div class="my-photos">${photosHtml}</div>`
}