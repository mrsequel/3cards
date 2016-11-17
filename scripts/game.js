'use strict';

// Liczba początkowa trafień
var score = 0;

// Czyszczenie przed wygenerowaniem pokemona
function clearCards() {
    document.querySelector('#cards').innerHTML = '';
}

// Wyrenderowanie pokemona
function render(pokemonList) {
    clearCards();
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

// Wybór jednej karty
var blocked = false;

function setupClicker() {
    var $cards = document.querySelector('#cards');
    $cards.addEventListener('click', function (event) {
        if (blocked){
            return;
        }
        var $pokemon = event.target;
        $pokemon.src = $pokemon.getAttribute('data-src');
        isHit($pokemon);
        blocked = true;
    });

    var $round = document.querySelector('#next-round');
    $round.addEventListener('click', function () {
        game();
        blocked = false;
    });

    var $new = document.querySelector('#restart-game');
    $new.addEventListener('click', function () {
        score = 0;
        displayScore();
        game();
        blocked = false;
    });
}

// Wyświetlenie wyniku
function displayScore() {
    document.getElementById("score").innerHTML = String(score);
}

// Sprawdzenie czy użytkownik trafił
function isHit(guess) {
    var hit = guess.getAttribute('data-is-winner');
    if (hit == 1) {
        score++;
        displayScore();
        alert("Gratulacje, trafiłeś! Następna runda! Wybierz pokeball!");
    } else {
        alert('Pudło! Zaczynamy od początku!');
    }
}
