import React, {useEffect, useState} from 'react';
import {getAllCharacters} from '../functions/Functions';
import { SearchInput } from './SearchInput';
import '../styles/character.css'

const Character = () => {
    const [personajes, setPersonajes] = useState(null);
    useEffect(() => {
        getAllCharacters(setPersonajes)
    }, [])

   return (
        <>
            <div className='container'>
            <SearchInput/>
            <div className='contenedorPrincipal'>
                
                {personajes != null ? (
                    personajes.map(personaje => (
                        <div className="contenedorCarta">
                                <img src={personaje.image} alt="imagen personaje" className='imagenCarta' />
                                <div className="informacionCarta">
                                    <h2>{personaje.name}</h2>
                                    <p>{personaje.status}</p>
                                    <p>{personaje.gender}</p>
                                    <button className='botonCarta'>Episodios</button>
                                </div>
                            </div>
                    ))
                    ): ('No se encontró el personaje')}
            </div>
            </div>
        </>
    );

}
export default Character;