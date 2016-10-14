'use strict';

// Pokeball
var POKEBALL = 'images/pokeball.jpg';

// Zbudowanie tablicy obiektów
var pokemons = [
    {
        url: 'images/pokemons/pokemon0.jpg'
    },
    {
        url: 'images/pokemons/pokemon1.jpg'
    },
    {
        url: 'images/pokemons/pokemon2.jpg'
    }
];

// Potasowanie listy
function shuffle(list) {
    var randomItemIndex = random(list.length);
    var randomItem = list[randomItemIndex];
    list.push(randomItem);
    list.splice(randomItemIndex, 1);
}

// Wylosowanie liczby od 0 do przekazanego numeru
function random(number) {
    return Math.round(Math.random() * (number - 1));
}

function getRandomPokemon() {
    var randomPokemonIndex = random(pokemons.length);
    return pokemons[randomPokemonIndex];
}

function render(pokemonList) {
    var $cards = document.querySelector('#cards');
    for (var i = 0; i < pokemonList.length; i++) {
        var $pokemon = document.createElement('img');
        $pokemon.classList.add('pokeball');
        $pokemon.setAttribute('src', POKEBALL);
        $pokemon.setAttribute('data-index', i);
        var pokemon = pokemonList[i];
        var pokemonUrl = pokemon.url;
        $pokemon.setAttribute('data-src', pokemonUrl);
        $cards.appendChild($pokemon);
    }
}

function setupClicker() {
    var $cards = document.querySelector('#cards');
    $cards.addEventListener('click', function (event) {
        var $pokemon = event.target;
        $pokemon.src = $pokemon.getAttribute('data-src');
    });
}

shuffle(pokemons);
render(pokemons);
setupClicker();