import { useState,useEffect } from "react";
import {Episode} from '../Episode';
import {getEpisodes} from '../../functions/Functions';
import '../../styles/episodeList.css'
import { SearchInput } from "../SearchInput";

const EpisodeList = () => {

    const [episodes, setEpisodes] = useState(null);
    useEffect(()=>{
        getEpisodes(setEpisodes);
        console.log(episodes);
    },[]);



    return (
        <>
        <div className="container">
            <SearchInput/>

            <div className="main">
            {
            episodes != null ? (
                episodes.map(
                    (episode) => (<Episode info = {episode}/>)
                    )
                    ) : ( 'no elements') 
                }
            </div>
            
     
        </div>
        </>
    );
}

export {EpisodeList}