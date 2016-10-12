"use strict";

var NUMBER_OF_POKEMONS_IN_GAME = 3;
var WINNER = 0;

// Losowania pokemonów - bez powtarzania wylosowanego
function random() {
    return Math.round(Math.random() * NUMBER_OF_POKEMONS_IN_GAME);
}

// "Baza" obrazków
function buildPokemonURL(number) {
    return "images/pokemons/pokemon" + number + ".jpg";
}

/*
// Funkcja powiadomień trafionych/nietrafionych
function win() {
    if (rand = 1) {
    alert("Punkt dla Ciebie!");
    } else {
    alert("Eh.. może następnym razem.");
    }
}
*/

// Kliknięcia
var count = 0;
var rand = random();
var $firstButton = document.getElementById("one");
var $secondButton = document.getElementById("two");
var $thirdButton = document.getElementById("three");
var $counter = document.getElementById("count");
var $restart = document.getElementById("new-game");
// var $next = document.getElementById("next-round");

// Pierwszy obrazek, losowanie
function clickHandler1() {
    var pokemonURL = buildPokemonURL(rand);
    console.log('1) pokemonURL', pokemonURL);

    $firstButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (rand === WINNER) {
        win();
        count++;
        $counter.innerHTML = String(count);
    } else {
        win();
        $firstButton.removeEventListener('click', clickHandler1);
    }
}

$firstButton.addEventListener('click', clickHandler1);

// Drugi obrazek, losowanie
function clickHandler2() {
    var pokemonURL = buildPokemonURL(rand);
    console.log('2) pokemonURL', pokemonURL);

    $secondButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (rand === WINNER) {
        win();
        count++;
        $counter.innerHTML = String(count);
    } else {
        win();
        $secondButton.removeEventListener('click', clickHandler2);
    }
}

$secondButton.addEventListener('click', clickHandler2);

// Trzeci obrazek, losowanie
function clickHandler3() {
    var pokemonURL = buildPokemonURL(rand);
    console.log('3) pokemonURL', pokemonURL);

    $thirdButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (rand === WINNER) {
        win();
        count++;
        $counter.innerHTML = String(count);
    } else {
        win();
        $thirdButton.removeEventListener('click', clickHandler3);
    }
}

$thirdButton.addEventListener('click', clickHandler3);

/*
// Następna kolejka
$next.addEventListener('click', function(){});
*/

// Nowa gra
$restart.addEventListener('click', function () {
    location.reload();
});
