import { galleryItems } from './gallery-items.js';
// Change code below this line
const bodyEl = document.getElementById('root');
const gallery = document.querySelector('.gallery');

function createGalleryElement(items) {
   let galleryEl = document.querySelector('.gallery');

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
    bodyEl.append(galleryEl);
  
    return galleryEl;
}

function onGalleryItemClick(event) {
  let clickedItemEl = event.target.closest('.gallery_item');
  if (!clickedItemEl) {
    return;
  }
}

function bindEvents(galleryEl) {
  galleryEl.addEventListener('click', onGalleryItemClick);
}

function initGallery(items) {
  let galleryEl = createGalleryElement(items);

  bindEvents(galleryEl);
}

initGallery(galleryItems);

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">`)

  instance.show()
  
})
