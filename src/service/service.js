const API_KEY = process.env.REACT_APP_API_KEY;
const url = 'https://newsapi.org/v2';

export const newsService = {
  getHeadlines,
  search,
  sources
}

function getHeadlines(country, category, search) {
  return fetch(`${url}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}

function search(searchTerm) {  
  return fetch(`${url}/everything?q=${searchTerm}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}

function sources() {  
  return fetch(`${url}/sources?apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}
