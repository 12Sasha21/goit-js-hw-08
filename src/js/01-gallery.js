import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createImgGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href='${original}'>
        <img class="gallery__image" src='${preview}' alt='${description}' />
      </a>
    `;
    })
    .join('');
}

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).open;
