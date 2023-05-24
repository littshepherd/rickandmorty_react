import './App.css';
import Character from './components/Character';
import {Home} from './components/container/Home';
import { SearchInput } from './components/SearchInput';
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
          <Route path='/personajes' element = {<Character/>}/>
          <Route path='/episodios' element= {<EpisodeList/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
