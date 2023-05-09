import './App.css';
import Character from './components/Character';
import InfoCards from './components/InfoCards';
import Slider from './components/Slider';

import Navbar from './components/Navbar';

function App() {
  const infoPersonajes = {
    title: "¿Que encontraras en la sección de personajes?",
    texto: "En esta sección podras ver la siguiente información de los personajes: ",
    elementos: [ 
      "Nombre",
      "estado (vivo o muerto)",
      "Episodios en los que aparece",
      "Imagen del personaje",
      "Ubicación donde fue visto por ultima vez",
    ],
  }
  const infoEpisodios = {
    title: "¿Que encontraras en la sección de episodios?",
    texto: "En esta sección podras ver la siguiente información de los episodios: ",
    elementos: [ 
      "Nombre de episodio",
      "Fecha de lanzamiento",
      "Numero de episodio",
      "Lista de personajes que aparecen",
      
    ]
  }
  return (
    <div className="App">

      <Navbar/>
      <Slider/>

      {/* <InfoCards info = {infoPersonajes}/>

      <InfoCards info = {infoEpisodios}/>  */}


      <Character />
    </div>
  );
}

export default App;
