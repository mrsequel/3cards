"use strict";

var NUMBER_OF_POKEMONS_IN_GAME = 3;
var WINNER_NUMBER = 1;

// 1. TODO(piecioshka): stworzyć $count                                                                - READY!
// 2. TODO(piecioshka): stworzyć zmienna, pod która będzie zwycięski pokemon (obecnie jest to 1)       - READY!
// 3. TODO(sequel): stworzyć przycisk "ponownego losowania" || "odświeżanie"                           - READY!
// 4. TODO(sequel): stworzyć komunikaty w przypadku trafienia i pudła                                  - READY?
// 5. TODO(sequel): stworzyć usuwanie liczby z tablicy po jej wylosowaniu w math.random                - READY?
// 6. TODO(sequel): stworzyć wybór tylko jednej karty oraz odświeżenie po wyborze                      - ?
// 7. TODO(sequel): stworzyć popup z wpisem loginu dla danego gracza                                   - ?
// 8. TODO(sequel): stworzyć top 10 najlepszych wyników z loginami graczy                              - ?
// 9. TODO(sequel): POPRAWKI!

/*// Nowy sposób losowania pokemonów - bez powtarzania wylosowanego
var pokemons = ["pokemon1", "pokemon2", "pokemon3"];
var list = pokemons.splice(Math.floor((Math.random()*pokemons.length), 1));
console.log(list);
*/

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
var $restart = document.getElementById("new-game");

// Pierwszy obrazek, losowanie
function clickHandler1() {
    var rand = random(NUMBER_OF_POKEMONS_IN_GAME);
    var pokemonURL = buildPokemonURL(rand);
    console.log('1) pokemonURL', pokemonURL);

    $firstButton.style.backgroundImage = "url('" + pokemonURL + "')";

    if (rand === WINNER_NUMBER) {
        alert("Punkt dla Ciebie!");
        count++;
        $counter.innerHTML = String(count);
    } else {
        alert("Eh.. może następnym razem.");
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
        alert("Punkt dla Ciebie!");
        count++;
        $counter.innerHTML = String(count);
    } else {
        alert("Eh.. może następnym razem.");
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
        alert("Punkt dla Ciebie!");
        count++;
        $counter.innerHTML = String(count);
    } else {
        alert("Eh.. może następnym razem.");
        $thirdButton.removeEventListener('click', clickHandler3);
    }
}

$thirdButton.addEventListener('click', clickHandler3);

// Nowa gra
$restart.addEventListener('click', function () {
    location.reload()
});
