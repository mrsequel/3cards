'use strict';

// Liczba początkowa trafień
var score = 0;

// Wyrenderowanie pokemona
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
        var pokemonIsWinner = pokemon.isWinner;
        $pokemon.setAttribute('data-is-winner', pokemonIsWinner);
        $cards.appendChild($pokemon);
    }
}

function setupClicker() {
    var $cards = document.querySelector('#cards');
    $cards.addEventListener('click', function (event) {
        var $pokemon = event.target;
        $pokemon.src = $pokemon.getAttribute('data-src');
        isHit($pokemon);
    });

    var $round = document.querySelector('#next-round');
    $round.addEventListener('click', function () {
        console.log('Następna runda! Wybierz pokeball!');
    });

    var $new = document.querySelector('#restart-game');
    $new.addEventListener('click', function () {
        restartGame();
    });
}

// Wyświetlenie wyniku
function displayScore() {
    document.getElementById("score").innerHTML = String(score);
    console.log("Gratulacje Mistrzu! Trafiłeś!");
}

// Sprawdzenie czy użytkownik trafił
function isHit(guess) {
    var hit = guess.getAttribute('data-is-winner');
    if (hit == 1) {
        score++;
        displayScore();
    }
}

startGame();
