"use strict";

var NUMBER_OF_POKEMONS_IN_GAME = 2;

// TODO(piecioshka): stworzyć $count                                                                - READY!
// TODO(piecioshka): stworzyć zmienna, pod która będzie zwycięski pokemon (obecnie jest to 1)       - READY!
// TODO(sequel): stworzyć wybór tylko jednej karty                                                  - ?
// TODO(sequel): stworzyć przycisk "ponownego losowania" || "odświeżanie"                           - READY!
// TODO(sequel): stworzyć wpisywanie loginu                                                         - ?
// TODO(sequel): stworzyć bazę najlepszy wyników z wykorzystaniem loginów                           - ?

function random(size) {
    return Math.floor((Math.random() * size) + 1)
}

// "Baza" obrazków
function buildPokemonURL(number) {
    return "images/pokemons/image" + number + ".jpg";
}

// Kliknięcia
var count = 0;

var $firstButton = document.getElementById("jeden");
var $secondButton = document.getElementById("dwa");
var $thirdButton = document.getElementById("trzy");
var $counter = document.getElementById("count");
var winner = "images/pokemons/image1.jpg";


// Pierwszy obrazek, losowanie
function clickHandler1() {
    var rand = random(NUMBER_OF_POKEMONS_IN_GAME);
    var pokemonURL = buildPokemonURL(rand);
    console.log('1) pokemonURL', pokemonURL);

    $firstButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (pokemonURL === winner) {
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
    if (pokemonURL === winner) {
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

    if (pokemonURL === winner) {
        count++;
        $counter.innerHTML = String(count);
    } else {
        $thirdButton.removeEventListener('click', clickHandler3);
    }
}

$thirdButton.addEventListener('click', clickHandler3);


function buttonReload() {
    location.reload();
}
