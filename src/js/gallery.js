const API_KEY = '47286351-e716f5558799522fb527bbff6';
const BASE_URL = 'https://pixabay.com/api';

export default class NewGalleryApi {
  constructor() {
    this.page = 1;
    this.perPage = 3;
  }

  fetchImages() {
    const url = `${BASE_URL}?key=${API_KEY}&editors_choice=true&per_page=${this.perPage}&page=${this.page}`;
    return fetch(url)
      .then(r => {
        return r.json();
      })
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
