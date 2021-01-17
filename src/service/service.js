const API_KEY = process.env.REACT_APP_API_KEY;

export const newsService = {
  get,
  search
}

function get(country) {
  const url = 'https://newsapi.org/v2/top-headlines';

  return fetch(`${url}?country=${country}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}

function search(searchTerm) {
  const url = 'https://newsapi.org/v2/everything';
  
  return fetch(`${url}?q=${searchTerm}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}
