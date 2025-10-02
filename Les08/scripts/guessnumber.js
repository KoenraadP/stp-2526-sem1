"use strict";

// random cijfer genereren vanaf 1 tot en met 3
let randomNumber = Math.random() * 3 + 1;
randomNumber = Math.floor(randomNumber);
// tonen op de pagina
document.body.innerHTML += randomNumber;
document.body.innerHTML += "<br>";

// input via prompt om cijfer te raden
let guessedNumber = prompt("Cijfer van 1 tot en met 3?");

// controleren of guessedNumber hetzelfde is als randomNumber
if (parseInt(guessedNumber) === randomNumber) {    
    document.body.innerHTML += "Goed geraden!"
} else {
    document.body.innerHTML += "Helaas, probeer opnieuw."
}