import React, { useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel';
import MainContent from './components/MainContent/MainContent';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <SidePanel 
        isOpen={isOpen}
        toggleMenu={toggleMenu} 
      />
      <MainContent 
        isOpen={isOpen}
        toggleMenu={toggleMenu} 
      />
    </div>
  );
}

export default App;
