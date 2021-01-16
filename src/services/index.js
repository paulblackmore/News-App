export function getHeadlines(country) {
  return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data => console.log('get headlines', data))
}
