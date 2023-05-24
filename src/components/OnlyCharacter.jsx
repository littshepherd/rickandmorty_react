import React, {useEffect, useState} from 'react';
import '../styles/character.css'

const OnlyCharacter = (props) => {
    const [personaje, setPersonaje] = useState(null);
    useEffect(() => {
        setPersonaje(props.info)
    }, [])

   return (
        <>
            <div className='contenedorPrincipal'>
                {personaje != null ? (
              
                            <div className="contenedorCarta">
                                <img src={personaje.image} alt="imagen personaje" className='imagenCarta' />
                                <div className="informacionCarta">
                                    <h2>{personaje.name}</h2>
                                    <p>{personaje.status}</p>
                                    <p>{personaje.gender}</p>
                                    <button className='botonCarta'>Episodios</button>
                                </div>
                            </div>
                    )
                : ('Not')}
            </div>
        </>
    );

}
export {OnlyCharacter};