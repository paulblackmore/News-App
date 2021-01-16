const url = 'https://newsapi.org/v2/top-headlines';
const API_KEY = process.env.REACT_APP_API_KEY;

export function getHeadlines(country) {
  return fetch(`${url}?country=${country}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log('get headlines', data))
}
