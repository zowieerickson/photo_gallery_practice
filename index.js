async function getPhotos() {
    const response = await fetch("photos.json");
    const photos = await response.json();
    return photos
}

getPhotos().then(photos => {
    console.log(photos)
    let photosHtml = photos.map(photo => {
        return `<img src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}" />`
    }).join('')

    console.log(photosHtml)
    document.body.innerHTML = photosHtml;
})

// getPhotos();