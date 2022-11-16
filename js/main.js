function pokemondle(){


   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(T => T.json())
    .then(console.log)


}