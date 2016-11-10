'use strict';

function startGame() {
    shuffle(POKEMONS);
    render(POKEMONS);
    setupClicker();
}

startGame();

function restartGame() {
    shuffle(POKEMONS);
    render(POKEMONS);
    setupClicker();
}
