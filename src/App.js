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
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
		loadHeadlines(country);
  }, [country])
  
  useEffect(() => {
    let array = [...headlines];

    if (limit !== '' && array.length > 0) {
      const splitArticles = new Array(Math.ceil(array.length / limit))
        .fill().map(_ => array.splice(0, limit));
      setArticles(splitArticles)
    }
  }, [limit, page, headlines])

  console.log('limit', limit)

  const toggleMenu = () => setIsOpen(!isOpen);
  const handlePage = (num) => setPage(num);
  const searchArticles = (event) => setSearch(event.target.value);
  const selectCountry = (event) => setCountry(event.target.value);
  
  const handleLimit = (event) => {
    setLimit(event.target.value)
  };

  const loadHeadlines = async() => {
		let data = await getHeadlines(country);
		setHeadlines(data.articles);
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
