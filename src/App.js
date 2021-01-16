import React, { useState, useEffect } from 'react';
import { getHeadlines } from './service/service';
import SidePanel from './components/SidePanel/SidePanel';
import MainContent from './components/MainContent/MainContent';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState('');
	const [country, setCountry] = useState('au');
	const [articles, setArticles] = useState([]);

  useEffect(() => {
		loadHeadlines(country);
	}, [country])

  const toggleMenu = () => setIsOpen(!isOpen);
  const searchArticles = (event) => setSearch(event.target.value);
	const selectCountry = (event) => setCountry(event.target.value);

  const loadHeadlines = async() => {
		let articles = await getHeadlines(country);
		setArticles(articles)
	}
	
	console.log('check', articles)

  return (
    <div className="App">
      <SidePanel 
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        searchArticles={searchArticles}
        selectCountry={selectCountry} 
      />
      <MainContent 
        isOpen={isOpen}
        toggleMenu={toggleMenu} 
      />
    </div>
  );
}

export default App;
