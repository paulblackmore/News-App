import { useState } from 'react';

const INITIAL_STATE = {
  isOpen: true,
  search: '',
  country: 'au',
  category: 'sports'
}

const useViewState = () => {
  const [viewState, setViewState] = useState(INITIAL_STATE);
  const { isOpen } = viewState;

  const toggleMenu = () => {
    setViewState({
      ...viewState, 
      isOpen: !isOpen
    });
  }

  const searchArticles = (event) => {
    setViewState({
      ...viewState, 
      search: event.target.value
    });
  }

  const selectCountry = (event) => {
    setViewState({
      ...viewState, 
      country: event.target.value
    });
  }

  const selectCategory = (event) => {
    setViewState({
      ...viewState, 
      category: event.target.value
    });
  }

  const viewActions = {
    toggleMenu,
    searchArticles,
    selectCountry,
    selectCategory
  }

  return { viewState, viewActions };
}

export { useViewState };