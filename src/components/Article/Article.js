import React from 'react';
import classes from './Article.module.css';

const Article = ({ article }) => {
  return(
    <div className={classes.container}>
      <img src={article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/350'} />
      <header>
        <span>{article.author ? article.author : 'Anonymous'}</span>
        <span>{article.publishedAt ? article.publishedAt : 'No Date'}</span>
      </header>
      <div>
        <h3>{article.title ? article.title : 'No Title'}</h3>
        <p>{article.description ? article.description : 'No Description'}</p>
      </div>
      <a href={article.url}>View Article</a>
    </div>
  )
}

export default Article;