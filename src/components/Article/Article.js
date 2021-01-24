import React from 'react';
import classes from './Article.module.css';

const Article = ({ article }) => {
  return(
    <a href={article.url} className={classes.container}>
      <img alt="news-img" src={article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/350'} />
      <header>
        <span>{article.author ? article.author : 'Anonymous'}</span>
        <span>{article.publishedAt ? article.publishedAt : 'No Date'}</span>
      </header>
      <div>
        <h3>{article.title ? article.title : 'No Title'}</h3>
        <p>{article.description ? article.description : 'No Description'}</p>
      </div>
    </a>
  )
}

export default Article;