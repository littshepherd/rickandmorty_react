import axios from 'axios';

const getCharacterEpisodes = (list,state) => {

const episodes = list.map( async (episodeUrl) => {
    const response = await axios.get(episodeUrl);
   
   return {

    "id": response.id,
    "name": response.name,
   }

});

state(episodes);

}

const getAllCharacters = async (state) => {

    const response = await axios.get('https://rickandmortyapi.com/api/character');
    state(response.data.results);
}

const getEpisodes=async (state)=>{
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    console.log(response)
    state(response.data.results)

}
export {
    getAllCharacters,
    getEpisodes
}