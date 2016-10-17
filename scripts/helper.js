'use strict';

function getRandomPokemon() {
    var randomPokemonIndex = random(pokemons.length);
    return pokemons[randomPokemonIndex];
}
