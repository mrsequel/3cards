"use strict";

var NUMBER_OF_POKEMONS_IN_GAME = 20;
var WINNER_NUMBER = 1;

// TODO(piecioshka): stworzyć $count                                                                - READY!
// TODO(piecioshka): stworzyć zmienna, pod która będzie zwycięski pokemon (obecnie jest to 1)       - READY!
// TODO(sequel): stworzyć przycisk "ponownego losowania" || "odświeżanie"                           - READY!
// TODO(sequel): stworzyć wybór tylko jednej karty                                                  - ?
// TODO(sequel): stworzyć większa częstotliwość wypadania zwycięskiego pokemona                     - ?
// TODO(sequel): stworzyć wpisywanie loginu                                                         - ?
// TODO(sequel): stworzyć bazę najlepszy wyników z wykorzystaniem loginów                           - ?


function random(size) {
    return Math.floor((Math.random() * size) + 1)
}

// "Baza" obrazków
function buildPokemonURL(number) {
    return "images/pokemons/pokemon" + number + ".jpg";
}

// Kliknięcia
var count = 0;

var $firstButton = document.getElementById("one");
var $secondButton = document.getElementById("two");
var $thirdButton = document.getElementById("three");
var $counter = document.getElementById("count");
var $restart = document.getElementById('new-game');

// Pierwszy obrazek, losowanie
function clickHandler1() {
    var rand = random(NUMBER_OF_POKEMONS_IN_GAME);
    var pokemonURL = buildPokemonURL(rand);
    console.log('1) pokemonURL', pokemonURL);

    $firstButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (rand === WINNER_NUMBER) {
        count++;
        $counter.innerHTML = String(count);
    } else {
        $firstButton.removeEventListener('click', clickHandler1);
    }
}

$firstButton.addEventListener('click', clickHandler1);

// Drugi obrazek, losowanie
function clickHandler2() {
    var rand = random(NUMBER_OF_POKEMONS_IN_GAME);
    var pokemonURL = buildPokemonURL(rand);
    console.log('2) pokemonURL', pokemonURL);

    $secondButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (rand === WINNER_NUMBER) {
        count++;
        $counter.innerHTML = String(count);
    } else {
        $secondButton.removeEventListener('click', clickHandler2);
    }
}

$secondButton.addEventListener('click', clickHandler2);

// Trzeci obrazek, losowanie
function clickHandler3() {
    var rand = random(NUMBER_OF_POKEMONS_IN_GAME);
    var pokemonURL = buildPokemonURL(rand);
    console.log('3) pokemonURL', pokemonURL);

    $thirdButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (rand === WINNER_NUMBER) {
        count++;
        $counter.innerHTML = String(count);
    } else {
        $thirdButton.removeEventListener('click', clickHandler3);
    }
}

$thirdButton.addEventListener('click', clickHandler3);

// Nowa gra
$restart.addEventListener('click', function () {
    location.reload()
});
