// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(SimpleLightbox);
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', renderGalleryItems(galleryItems));

function renderGalleryItems() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
                 <img class="gallery__image"
                 src="${preview}"
                 alt="${description}" />
</a>
`;
    })
    .join('');
}

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

