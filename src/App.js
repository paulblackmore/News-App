import React, { useEffect } from 'react';
import { useData } from './service/service';
import SidePanel from './components/SidePanel/SidePanel';
import MainContent from './components/MainContent/MainContent';
import './App.css';

const App = () => {
  const { state, actions } = useData();

  useEffect(() => actions.searchHeadlines(search), [search])
  useEffect(() => actions.fetchHeadlines(country, category), [country, category])
  useEffect(() => actions.splitArticlesByLimit(headlineArray), [headlineArray])
	
  return(
    <div className="App">
      <SidePanel 
        state={state}
        actions={actions}
      />
      <MainContent 
        state={state}
      />
    </div>
  );
}

export default App;
