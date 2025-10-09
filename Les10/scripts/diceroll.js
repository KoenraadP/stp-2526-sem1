"use strict";

// hoeveel ogen staan er op onze dobbelsteen (maximum)?
const dice = 6;

// variabele om bij te houden hoeveel keer we '6' gooien
// soort teller dus
let counter = 0;

// vragen aan gebruiker of hij/zij wil rollen met de dobbelsteen
let userInput = prompt("Rollen met de dobbelsteen?");

// als het antwoord "ja" is dan rollen met dobbelsteen
while (userInput === "ja") {
    // random getal van 1 tot en met maximum aantal ogen op dice genereren
    let roll = Math.floor(Math.random() * dice + 1);
    // controleren of roll het maximum is, zo ja: bijtellen bij counter
    if (roll === dice) {
        counter++;
    }
    // rol getal tonen
    document.body.innerHTML += roll + "<br>";
    // tonen aan gebruiker wat er gerold werd
    alert("Je hebt " + roll + " gerold");
    // userInput opnieuw opvragen
    userInput = prompt("Wil je nog eens gooien?");
}

// nog tonen hoeveel keer we het maximum gerold hebben
document.body.innerHTML += "<p>Je hebt " + counter + 
                        " keer het maximum gerold</p>";