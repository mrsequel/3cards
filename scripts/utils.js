'use strict';


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
