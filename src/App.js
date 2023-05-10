import './App.css';
import Character from './components/Character';
import {Home} from './components/container/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { CharacterList} from './components/container/CharacterList';
import { EpisodeList } from './components/container/EpisodeList';

import Navbar from './components/Navbar';

function App() {
 
  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/personajes' element = {<CharacterList/>}/>
          <Route path='/episodios' element= {<EpisodeList/>}/>

        </Routes>
      </Router>
      <Character />
      
    </div>
  );
}

export default App;
