
function pokemondle(){

var input_namePokemon = document.getElementById('name_pokemon');
console.log(input_namePokemon.value);
pokemondle_SearchForName(input_namePokemon.value.toString());

}
function pokemondle_SearchForName(name_pokemon){
   fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)
    .then(T => T.json())
    .then(j=>{
        var img_namePokemon = document.getElementById('img_pokemon');
        console.log(j.sprites.front_default);
        img_namePokemon.src = j.sprites.front_default;
        img_namePokemon.style.width = "300px";
        img_namePokemon.style.height = "300px";
    })


}