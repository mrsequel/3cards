'use strict';

// Liczba początkowa trafień
var score = 0;

/*
// Zliczanie trafionego pokemona
function winner(){
    if () {
        score++;
        document.getElementById("score").innerHTML = String(score);
        console.log("Gratulacje Mistrzu! Trafiłeś!");
    }
}
*/

function render(pokemonList) {
    var $cards = document.querySelector('#cards');
    for (var i = 0; i < pokemonList.length; i++) {
        var $pokemon = document.createElement('img');
        $pokemon.classList.add('pokeball');
        $pokemon.setAttribute('src', POKEBALL);
        $pokemon.setAttribute('data-index', String(i));
        var pokemon = pokemonList[i];
        var pokemonUrl = pokemon.url;
        $pokemon.setAttribute('data-src', pokemonUrl);
        $pokemon.setAttribute('data-is-winner', pokemonUrl);
        $cards.appendChild($pokemon);
    }
}

function setupClicker() {
    var $cards = document.querySelector('#cards');
    $cards.addEventListener('click', function (event) {
        var $pokemon = event.target;
        $pokemon.src = $pokemon.getAttribute('data-src');
    });

    var $round = document.querySelector('#next-round');
    $round.addEventListener('click', function () {
        console.log('Następna runda! Wybierz pokeball!');
        localStorage.setItem("result", score);
        localStorage.getItem("result");
    });

    var $new = document.querySelector('#restart-game');
    $new.addEventListener('click', function () {
        localStorage.clear();
        location.reload();
    });
}

render(pokemons);
setupClicker();
