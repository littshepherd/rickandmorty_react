import '../styles/search.css'
import { useState,useRef,useEffect } from 'react';
import axios from 'axios';
import { Episode } from './Episode';
import {OnlyCharacter} from './OnlyCharacter'
const SearchInput = () => {
const inputValue = useRef();

const [value, setValue] = useState("character");
const [string, setString] = useState();
const [element,setElement] = useState(null)


useEffect(() => {

    console.log(value == "character");

},[value, string]);
    
const options = ["character", "episode"]

const search = async () => {
    const response = value == "character" ? await axios.get(`https://rickandmortyapi.com/api/character/?name=${string}`) : await axios.get(`https://rickandmortyapi.com/api/episode/?name=${string}`);
    
    const data = response.data.results.map(resultado =>  value == "character" ? (<OnlyCharacter info= {resultado} />) :  (<Episode info = { resultado}/>)) ;

    setElement(data)

} 
  

    return(
        <>

        <div className='main-container'>
            <form action="#"method="GET">
                <div className='group'>
                    <div className="select-input">
                    <select name="" id="" onChange = {(evento) => {setValue(evento.target.value)}} >
                        {
                            options.map((option) => (<option value={option}> {option}</option>))
                        }
                    </select>
                    </div>
                    <div className='text-input'>
                        <input type="text" placeholder="Nombre de episodio o personaje" onChange={() => {setString(inputValue.current.value)}} ref={inputValue}/>
                    </div>
                    <div className='btn-input'>
                    <input type="button" value="Buscar" onClick={search} />
                    </div>
                    
                </div>
            </form>
        </div>
            <div className="result">

            {element != null ? element : ''}
            </div>
           
    </>
    );
}
export {SearchInput}