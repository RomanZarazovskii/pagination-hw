import NewGalleryApi from './js/gallery.js';

const gallery = document.getElementById('gallery');
const btn = document.getElementById('btn');

const galleryApi = new NewGalleryApi();

btn.addEventListener('click', onLoadMore);

fetchImages();

function fetchImages() {
  galleryApi
    .fetchImages()
    .then(images => renderImages(images))
    .catch(error => console.log(error));
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

function onLoadMore() {
  fetchImages();
}
