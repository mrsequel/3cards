"use strict";

var NUMBER_OF_POKEMONS_IN_GAME = 3;

// TODO(piecioshka): stworzyć $count
// TODO(piecioshka): stworzyć zmienna, pod która bedzie zwycieski pokemon (obecnie jest to 1)

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

// Pierwszy obrazek, losowanie
function clickHandler1() {
    var rand = random(NUMBER_OF_POKEMONS_IN_GAME);
    var pokemonURL = buildPokemonURL(rand);
    console.log('1) pokemonURL', pokemonURL);

    $firstButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (rand === 1) {
        count++;
        document.getElementById("count").innerHTML = String(count);
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

    if (rand === 1) {
        count++;
        document.getElementById("count").innerHTML = String(count);
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

    if (rand === 1) {
        count++;
        document.getElementById("count").innerHTML = String(count);
    } else {
        $thirdButton.removeEventListener('click', clickHandler3);
    }
}

$thirdButton.addEventListener('click', clickHandler3);
