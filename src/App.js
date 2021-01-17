import React, { useState, useEffect } from 'react';
import { getHeadlines } from './service/service';
import SidePanel from './components/SidePanel/SidePanel';
import MainContent from './components/MainContent/MainContent';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState('');
	const [country, setCountry] = useState('au');
  const [headlines, setHeadlines] = useState([]);
  const [articles, setArticles] = useState([])

  useEffect(() => fetchHeadlines(country), [country])
  useEffect(() => splitArticlesByLimit(headlines), [headlines])

  const toggleMenu = () => setIsOpen(!isOpen);
  const searchArticles = (event) => setSearch(event.target.value);
  const selectCountry = (event) => setCountry(event.target.value);

  const fetchHeadlines = async() => {
		let data = await getHeadlines(country);
		setHeadlines(data.articles);
  }
  
  const splitArticlesByLimit = (headlines) => {
    if (headlines.length > 0) {
      const limit = 10
      const splitArticles = new Array(Math.ceil(headlines.length / limit))
        .fill().map(_ => headlines.splice(0, limit));
      setArticles(splitArticles)
    }
  }
	
  return(
    <div className="App">
      <SidePanel 
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        searchArticles={searchArticles}
        selectCountry={selectCountry} 
      />
      <MainContent 
        isOpen={isOpen}
        articles={articles}
        toggleMenu={toggleMenu} 
      />
    </div>
  );
}

export default App;
