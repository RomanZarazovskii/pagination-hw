const apiKey = '47286351-e716f5558799522fb527bbff6';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&editors_choice=true&image_type=photo&per_page=4`;

export function fetchImagesFromServer(page) {
  return fetch(`${apiUrl}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      if (!Array.isArray(data.hits)) {
        console.error('Error');
        return [];
      }
      return data.hits;
    })
    .catch(error => {
      console.error('Something went wrong', error);
      return [];
    });
}
