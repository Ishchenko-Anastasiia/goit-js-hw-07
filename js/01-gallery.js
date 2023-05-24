import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createGalleryElement(items) {
    let galleryElements = items.map(item => {
        let itemEl = document.createElement('li');
      itemEl.classList.add('gallery__item');
      
        let imgLink = document.createElement('a');
        imgLink.classList.add('gallery__link');
      
        let galleryImg = document.createElement('img');
        galleryImg.classList.add('gallery__image');
        galleryImg.src = item.preview;
        galleryImg.setAttribute('data-source', item.original);
        galleryImg.alt = item.description;

        itemEl.append(imgLink);
        imgLink.appendChild(galleryImg);
      
        return itemEl;
    });
    galleryEl.append(...galleryElements);

  
    return galleryEl;
}

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">`)

  instance.show()
  
})

function initGallery(items) {
  let galleryEl = createGalleryElement(items);
}

initGallery(galleryItems);


