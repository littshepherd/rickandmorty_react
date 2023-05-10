const Character = () => {
    
    // let resp = fetch("https://rickandmortyapi.com/api/character", {
    //     method: 'GET'
    // }).then(response => response.json()).then(json => console.log(json))
    let respuesta = '';
    let getData = async () =>{
        const resp = await fetch("https://rickandmortyapi.com/api/character", {
                method: 'GET'
             }
        )
        respuesta = await resp.json()
        console.log(respuesta)
    }   
   
   getData();

   return (
    <div className="cardContainer">
        <img src="" alt="imagen personaje" />

    </div>
);

}
export default Character;