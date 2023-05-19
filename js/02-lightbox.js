import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(item => {
    let itemEl = document.createElement('li');
      itemEl.classList.add('gallery__item');
    
    const imgLink = document.createElement('a');
    imgLink.className = 'gallery__link';
    imgLink.href = item.original;
    
    const galleryImg = document.createElement('img');
    galleryImg.className = 'gallery__image';
    galleryImg.src = item.preview;
    galleryImg.setAttribute('title', item.description);
    galleryImg.alt = item.description;

    itemEl.append(imgLink);
    imgLink.append(galleryImg);
    items.push(itemEl);

    return itemEl;
});

gallery.append(...items);

function onGalleryItemClick(event) {
  let clickedItemEl = event.target.closest('.gallery_item');
  if (!clickedItemEl) {
    return;
  }
}

new SimpleLightbox('.gallery a', {
    captionDelay: 250
})

