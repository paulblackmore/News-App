import './App.css';
import SidePanel from './Components/SidePanel/SidePanel';
import MainContent from './Components/MainContent/MainContent';

const App = () => {
  return (
    <div className="App">
      <SidePanel />
      <MainContent />
    </div>
  );
}

export default App;
