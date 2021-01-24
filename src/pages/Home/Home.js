import React, { useEffect, useRef } from 'react';
import { useDataState } from './useDataState';
import { useViewState } from './useViewState';
import SidePanel from './SidePanel/SidePanel';
import MainContent from './MainContent/MainContent';

const Home = () => {
  const { dataState, dataActions } = useDataState();
  const { viewState, viewActions } = useViewState();

  const { headlineArray } = dataState;
  const { searchHeadlines, fetchHeadlines, splitArticlesByLimit } = dataActions;

  const { search, country, category } = viewState;

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
        viewState={viewState}
        dataState={dataState}
        viewActions={viewActions}
      />
      <MainContent 
        viewState={viewState}
        dataState={dataState}
        viewActions={viewActions}
      />
    </>
  );
}

export { Home };
