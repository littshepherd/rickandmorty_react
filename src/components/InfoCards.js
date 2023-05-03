import styled from 'styled-components'
const InfoCard = () => {
   
    return (
        <>
            <CardContainer>
            <div className='mainContainer'>

            
                <div>
                    <h3>¿Que encontraras en la sección de personajes?</h3>
                </div>
                <hr></hr>
                <div className='seccion'>
                    <p>En esta sección podras ver la siguiente información de los personajes: </p>
                    <ul className='lista'>
                        <li>Nombre</li>
                        <li>Estado (vivo o muerto)</li>
                        <li>Episodios en los que aparece</li>
                        <li>Imagen del personaje</li>
                        <li>Ubicación donde fue visto por ultima vez</li>
                    </ul>
                    <div className='button'>
                         <button>Ver ejemplo</button>
                    </div>
                    
                </div>
            </div>
            </CardContainer>
        </>
    );
}

export default InfoCard;
const  CardContainer = styled.ul `
.mainContainer{
    padding: 20px;
    width : 350px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.lista {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.seccion {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

}
p{
    padding: 0px;
}
hr {
    opacity: 0.2;
}
button {
    border-style: none;
    background-color: rgba(255,0,0, 0.7);
    height: 30px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
.button {
    display: flex;
    width: 100%;
    justify-content: end;
}
`