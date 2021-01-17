import React, { useState, useEffect } from 'react';
import { newsService } from './service/service';
import SidePanel from './components/SidePanel/SidePanel';
import MainContent from './components/MainContent/MainContent';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('au');
  const [category, setCategory] = useState('sports')
  const [headlines, setHeadlines] = useState([]);
  const [articles, setArticles] = useState([])

  useEffect(() => searchHeadlines(search), [search])
  useEffect(() => fetchHeadlines(country, category), [country, category])
  useEffect(() => splitArticlesByLimit(headlines), [headlines])

  const toggleMenu = (isOpen) => setIsOpen(!isOpen);
  const searchArticles = (event) => setSearch(event.target.value);
  const selectCountry = (event) => setCountry(event.target.value);
  const selectCategory = (event) => setCategory(event.target.value);

  const fetchHeadlines = async(country, category) => {
    if (country === '') return;
		let data = await newsService.getHeadlines(country, category);
		setHeadlines(data.articles);
  }

  const searchHeadlines = async(search) => {
    if (search === '') return;
    let data = await newsService.search(search)
		setHeadlines(data.articles);
  }
  
  const splitArticlesByLimit = (headlines) => {
    if (headlines && headlines.length > 0) {
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
        selectCategory={selectCategory} 
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
