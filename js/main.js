// import {clearWhiteSpacesAndToLower} from "utils.js";


function clearWhiteSpacesAndToLower(str){
    
    return str.replace(/\s/g, '').toLowerCase();
    
}

async function pokemondle_SearchForName(name_pokemon){

    name_pokemon = await clearWhiteSpacesAndToLower(name_pokemon);

   console.log(name_pokemon);
   fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)
    .then(T => T.json())
    .then(data=>{
        
        var img_namePokemon = document.getElementById('img_pokemon');
        console.log(j.sprites.front_default);
        img_namePokemon.style.width = "300px";
        img_namePokemon.style.height = "300px";
       

        img_namePokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front-default'];
     
    })
}

function pokemondle(){

    var input_namePokemon = document.getElementById('name_pokemon');
    
    pokemondle_SearchForName(input_namePokemon.value.toString());
    
}