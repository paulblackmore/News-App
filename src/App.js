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
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
		loadHeadlines(country);
  }, [country])
  
  useEffect(() => {
    if (headlines.length > 0) {
      setArticles(headlines.slice(page -1, limit))
    }
  }, [limit, page])

  const toggleMenu = () => setIsOpen(!isOpen);
  const handlePage = (num) => setPage(num);
  const handleLimit = (event) => setLimit(event.target.value);
  const searchArticles = (event) => setSearch(event.target.value);
	const selectCountry = (event) => setCountry(event.target.value);

  const loadHeadlines = async() => {
		let data = await getHeadlines(country);
		setHeadlines(data.articles)
	}
	
  return (
    <div className="App">
      <SidePanel 
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        searchArticles={searchArticles}
        selectCountry={selectCountry} 
      />
      <MainContent 
        page={page}
        limit={limit}
        isOpen={isOpen}
        articles={articles}
        toggleMenu={toggleMenu} 
        handlePage={handlePage}
        handleLimit={handleLimit}
      />
    </div>
  );
}

export default App;
