import { useState } from 'react';
import { newsService } from '../../service/service';

const INITIAL_STATE = {
  articles: [],
  headlineArray: []
}

const useDataState = () => {
  const [dataState, setDataState] = useState(INITIAL_STATE);

  const fetchHeadlines = async(country, category) => {
    if (country === '') return;
		let data = await newsService.getHeadlines(country, category);
		setDataState({...dataState, headlineArray: data.articles});
  }

  const searchHeadlines = async(search) => {
    if (search === '') return;
    let data = await newsService.search(search)
    setDataState({...dataState, headlineArray: data.articles});
  }
  
  const splitArticlesByLimit = (headlineArray) => {
    if (headlineArray && headlineArray.length > 0) {
      const limit = 10
      const splitArticles = new Array(Math.ceil(headlineArray.length / limit))
        .fill().map(_ => headlineArray.splice(0, limit));
		  setDataState({...dataState, articles: splitArticles});
    }
  }

  const dataActions = {
    searchHeadlines,
    fetchHeadlines,
    splitArticlesByLimit
  }

  return { dataState, dataActions };
}

export { useDataState };