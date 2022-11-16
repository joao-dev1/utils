
function pokemondle(){
var input_namePokemon = document.getElementById('name_pokemon');
pokemondle_SearchForName(input_namePokemon);
}
function pokemondle_SearchForName(name_pokemon){
   fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)
    .then(T => T.json())
    .then(j=>{
        console.log(j.Tsprites.front_default);
    })


}