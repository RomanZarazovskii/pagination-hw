import { fetchImagesFromServer } from './js/gallery';

const gallery = document.getElementById('gallery');
const btn = document.getElementById('btn');

let currentPage = 1;

function renderImages(images) {
  images.forEach(item => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('image__item');

    imageItem.innerHTML = `
      <img src="${item.largeImageURL}" alt="${item.user}">
      <p>author: ${item.user}</p>
      <p>likes: ${item.likes} ❤️</p>
    `;

    gallery.appendChild(imageItem);
  });
}

btn.addEventListener('click', () => {
  currentPage++;
  fetchImagesFromServer(currentPage).then(renderImages);
});

fetchImagesFromServer(currentPage).then(renderImages);
