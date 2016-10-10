"use strict";

var NUMBER_OF_POKEMONS_IN_GAME = [0, 1];
var WINNER = "images/pokemons/pokemon.jpg";

// 1. TODO(piecioshka): stworzyć $count                                                                - READY!
// 2. TODO(piecioshka): stworzyć zmienna, pod która będzie zwycięski pokemon (obecnie jest to 1)       - READY!
// 3. TODO(sequel): stworzyć przycisk "ponownego losowania" || "odświeżanie"                           - READY!
// 4. TODO(sequel): stworzyć komunikaty w przypadku trafienia i pudła                                  - READY!
// 5. TODO(sequel): stworzyć usuwanie liczby z tablicy po jej wylosowaniu w math.random                - READY!
// 6. TODO(sequel): stworzyć automatyczne odświeżanie(po 3s) DIVA po wyborze karty                     - ?
// 7. TODO(sequel): stworzyć wybór tylko jednej karty                                                  - ?
// 8. TODO(sequel): stworzyć popup z wpisem loginu dla danego gracza                                   - ?
// 9. TODO(sequel): stworzyć top 10 najlepszych wyników z loginami graczy                              - ?
// 10. TODO(sequel): POPRAWKI!                                                                         - ?

// Losowania pokemonów - bez powtarzania wylosowanego
function random() {
    return NUMBER_OF_POKEMONS_IN_GAME.splice((Math.floor(Math.random() * NUMBER_OF_POKEMONS_IN_GAME.length)), 1);
}

// "Baza" obrazków
function buildPokemonURL(number) {
    return "images/pokemons/pokemon" + number + ".jpg";
}

// Funkcja powiadomień trafionych
function win() {
    return alert("Punkt dla Ciebie!");
}

// Funkcja powiadomień nietrafionych
function lose() {
    return alert("Eh.. może następnym razem.");
}

// Kliknięcia
var count = 0;

var $firstButton = document.getElementById("one");
var $secondButton = document.getElementById("two");
var $thirdButton = document.getElementById("three");
var $counter = document.getElementById("count");
var $restart = document.getElementById("new-game");

// Pierwszy obrazek, losowanie
function clickHandler1() {
    var rand = random();
    var pokemonURL = buildPokemonURL(rand);
    console.log('1) pokemonURL', pokemonURL);

    $firstButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (pokemonURL === WINNER) {
        win();
        count++;
        $counter.innerHTML = String(count);
    } else {
        lose();
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

    if (pokemonURL === WINNER) {
        win();
        count++;
        $counter.innerHTML = String(count);
    } else {
        lose();
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

    if (pokemonURL === WINNER) {
        win();
        count++;
        $counter.innerHTML = String(count);
    } else {
        lose();
        $thirdButton.removeEventListener('click', clickHandler3);
    }
}

$thirdButton.addEventListener('click', clickHandler3);

// Nowa gra
$restart.addEventListener('click', function () {
    location.reload()
});
