'use strict';

function getRandomPokemon() {
    var randomPokemonIndex = random(POKEMONS.length);
    return POKEMONS[randomPokemonIndex];
}
