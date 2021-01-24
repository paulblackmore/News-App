import React, { useEffect, useRef } from 'react';
import { useData } from './useData';
import SidePanel from './SidePanel/SidePanel';
import MainContent from './MainContent/MainContent';

const Home = () => {
  const { state, actions } = useData();
  const { search, country, category, headlineArray } = state;
  const { searchHeadlines, fetchHeadlines, splitArticlesByLimit } = actions;

  // referenced state
  const searchRef = useRef(search);
  const countryRef = useRef(country);
  const categoryRef = useRef(category);
  const headlineArrayRef = useRef(headlineArray);

  useEffect(() => {
    searchRef.current = search;
    countryRef.current = country;
    categoryRef.current = category;
    headlineArrayRef.current = headlineArray;
  })

  useEffect(() => searchHeadlines(searchRef.current), [searchHeadlines])

  useEffect(() => fetchHeadlines(countryRef.current, categoryRef.current), [fetchHeadlines])

  useEffect(() => splitArticlesByLimit(headlineArrayRef.current), [splitArticlesByLimit])
	
  return(
    <>
      <SidePanel 
        state={state}
        actions={actions}
      />
      <MainContent 
        state={state}
      />
    </>
  );
}

export { Home };
