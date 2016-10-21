'use strict';

// "Zapasowa" funkcja
function getRandomPokemon() {
    var randomPokemonIndex = random(pokemons.length);
    return pokemons[randomPokemonIndex];
}
