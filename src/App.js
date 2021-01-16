import './App.css';
import SidePanel from './components/SidePanel/SidePanel';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  return (
    <div className="App">
      <SidePanel />
      <MainContent />
    </div>
  );
}

export default App;
