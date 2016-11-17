'use strict';

function startGame() {
    shuffle(POKEMONS);
    render(POKEMONS);
    setupClicker();
}

startGame();

function game(){
    shuffle(POKEMONS);
    render(POKEMONS);
}
