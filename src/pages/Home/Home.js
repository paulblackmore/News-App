import React from 'react';
import { useAppState } from './useAppState';
import SidePanel from './SidePanel/SidePanel';
import MainContent from './MainContent/MainContent';

const Home = () => {
  const { state, actions } = useAppState();
  const { isOpen, articles } = state;
	
  return(
    <>
      <SidePanel 
        isOpen={isOpen}
        actions={actions}
      />
      <MainContent 
        isOpen={isOpen}
        articles={articles}
        actions={actions}
      />
    </>
  );
}

export { Home };
