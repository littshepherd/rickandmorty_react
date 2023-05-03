import './App.css';
import Character from './components/Character';
import InfoCards from './components/InfoCards';

import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App">

      <Navbar/>
      <InfoCards />
      

      <Character />
    </div>
  );
}

export default App;
