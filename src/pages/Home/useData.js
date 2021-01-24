import { useState } from 'react';
import { newsService } from '../../service/service';

const INITIAL_STATE = {
  articles: [],
  headlineArray: [],
  isOpen: true,
  search: '',
  country: 'au',
  category: 'sports'
}

const useData = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { isOpen } = state;

  const toggleMenu = () => {
    setState({
      ...state, 
      isOpen: !isOpen
    });
  }

  const searchArticles = (event) => {
    setState({
      ...state, 
      search: event.target.value
    });
  }

  const selectCountry = (event) => {
    setState({
      ...state, 
      country: event.target.value
    });
  }

  const selectCategory = (event) => {
    setState({
      ...state, 
      category: event.target.value
    });
  }

  const fetchHeadlines = async(country, category) => {
    if (country === '') return;
		let data = await newsService.getHeadlines(country, category);
		setState({...state, headlineArray: data.articles});
  }

  const searchHeadlines = async(search) => {
    if (search === '') return;
    let data = await newsService.search(search)
    setState({...state, headlineArray: data.articles});
  }
  
  const splitArticlesByLimit = (headlineArray) => {
    if (headlineArray && headlineArray.length > 0) {
      const limit = 10
      const splitArticles = new Array(Math.ceil(headlineArray.length / limit))
        .fill().map(_ => headlineArray.splice(0, limit));
		  setState({...state, articles: splitArticles});
    }
  }

  const actions = {
    toggleMenu,
    searchArticles,
    selectCountry,
    selectCategory,
    searchHeadlines,
    fetchHeadlines,
    splitArticlesByLimit
  }

  return { state, actions };
}

export { useData };