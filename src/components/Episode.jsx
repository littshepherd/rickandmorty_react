import { prettyDOM } from "@testing-library/react";
import { useState,useEffect } from "react";
import '../styles/episodes.css'

const Episode = (props) => {
const [info, setInfo] = useState(null);

useEffect(()=>{
    setInfo(props.info)
},[]);
    return(
        <>
                {
                    info != null ? (
                    <div className="main-container">

                        <div className="head">
                            <h2>{info.name}</h2>
                            <span>{info.air_date}</span>
                        </div>
                        <div className="body">
                            <p>Número de episodio: <span>{info.episode}</span></p>

                            <div className="button">
                                <a href="#">Personajes que aparencen en este episodio</a>
                            </div>
                        </div>
                        
                    </div>

                    ): ('not')
                }
            
        </>
    );
}

export {Episode};