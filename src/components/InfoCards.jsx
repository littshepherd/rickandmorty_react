import styled from 'styled-components'
const InfoCard = (props) => {

    const informacion = props.info;

    const Lista = informacion.elementos.map( (elemento) => <li>{elemento}</li>)
    return (
        <>
            <CardContainer>
            <div className='mainContainer'>

            
                <div>
                    <h3>{informacion.title}</h3>
                </div>
                <hr></hr>
                <div className='seccion'>
                    <p>{informacion.texto} </p>

                    <ul className='lista'>
                       {Lista}
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
    box-shadow: 3px 3px 20px rgba(0,0,0,0.5) ;
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