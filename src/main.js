import NewGalleryApi from './js/gallery.js';

const gallery = document.getElementById('gallery');
const btn = document.getElementById('btn');

const galleryApi = new NewGalleryApi();

document.addEventListener('DOMContentLoaded', () => {
  galleryApi.fetchImages().then(({ hits }) => {
    renderImages(hits);
    galleryApi.incrementPage();
  });
});

btn.addEventListener('click', onLoadMore);

function onLoadMore() {
  galleryApi.fetchImages().then(({ hits }) => {
    renderImages(hits);
    galleryApi.incrementPage();
  });
}

function renderImages(images) {
  const markUp = images
    .map(image => {
      return `
        <div class="gallery-item">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </div>
      `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markUp);
}
