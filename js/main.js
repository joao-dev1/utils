import {clearWhiteSpacesAndToLower} from "utils.js";
function pokemondle(){

var input_namePokemon = document.getElementById('name_pokemon');

pokemondle_SearchForName(input_namePokemon.value.toString());

}
function pokemondle_SearchForName(name_pokemon){
    
    name_pokemon = clearWhiteSpacesAndToLower(name_pokemon);
   console.log(name_pokemon);
   fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)
    .then(T => T.json())
    .then(j=>{
        var img_namePokemon = document.getElementById('img_pokemon');
        console.log(j.sprites.front_default);
        img_namePokemon.style.width = "300px";
        img_namePokemon.style.height = "300px";
        img_namePokemon.src = j.sprites.front_default;
     
    })
}