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

// Przycisk "Następna kolejka" - ponowne wyrenderowanie pokeball
function sort(pokemonList) {
    var $pokemon = document.getElementsByClassName('pokeball');
    shuffle(pokemons);
    for (var i = 0; i < pokemonList.length; i++) {
        $pokemon[i].setAttribute('src', POKEBALL);
        $pokemon[i].setAttribute('data-index', String(i));
        var pokemon = pokemonList[i];
        var pokemonUrl = pokemon.url;
        $pokemon[i].setAttribute('data-src', pokemonUrl);
        var pokemonIsWinner = pokemon.isWinner;
        $pokemon[i].setAttribute('data-is-winner', pokemonIsWinner);
    }
    winner($pokemon);
}

function setupClicker() {
    var $cards = document.querySelector('#cards');
    $cards.addEventListener('click', function (event) {
        var $pokemon = event.target;
        $pokemon.src = $pokemon.getAttribute('data-src');
        winner($pokemon);
    });

    var $round = document.querySelector('#next-round');
    $round.addEventListener('click', function () {
        console.log('Następna runda! Wybierz pokeball!');
        sort(pokemons);
    });

    var $new = document.querySelector('#restart-game');
    $new.addEventListener('click', function () {
        location.reload();
    });
}

// Zliczanie trafionego pokemona
function winner(something) {
    var win = something.getAttribute('data-is-winner');
    if (win == 1) {
        score++;
        document.getElementById("score").innerHTML = String(score);
        console.log("Gratulacje Mistrzu! Trafiłeś!");
    }
}

// Wybór jednej karty
function chooseOne(something) {
    var $cards = document.getElementsByClassName('#cards');
    var choose = something.getAttribute('data-index');
    if (choose != 0) {
        $cards.removeEventListener('click', setupClicker);
    }
}

render(pokemons);
setupClicker();
chooseOne(pokemons);
