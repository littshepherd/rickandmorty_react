import React from 'react'
import '../styles/information.css';

const Information = () => {  
  return (
    <div className='contenedorPrincipal'>
        <h2>¿Qué encontrarás en nuestro proyecto?</h2>
        <p>Nuestro proyecto se encarga de consumir una API basada en la serie animada de <span>Rick & Morty</span>, de allí extraemos información (en formato JSON) acerca de los personajes y capítulos, para luego presentarla al usuario de una forma visualmente agradable.</p>
        <div className='contenedorInformacion'>
            <div className='carta'>
              <h2>Sección de personajes</h2>
              <p>Se dispondrán cartas con la siguiente información acerca de los personajes de la serie.</p>
              <hr />
              <ul>
                <li>Imagen</li>
                <li>Nombre</li>
                <li>Estado</li>
                <li>Genero</li>
              </ul>
            </div>
            <div className="carta">
              <h2>Sección de episodios</h2>
              <p>Se dispondrán cartas con la siguiente información acerca de los episodios de la serie.</p>
              <hr />
              <ul>
                <li>Nombre</li>
                <li>Feche de emisión</li>
                <li>Número de episodio</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Information