"use strict";

// mogelijke opties voor 'spel' in array
const options = ["kop", "munt"];

// bijhouden hoeveel keer ik goed geraden heb
let wins = 0;

// 'spel' drie keer laten spelen
for (let i = 0; i < 3; i++) {
    // kop of munt laten kiezen door computer
    let randomIndex = Math.floor(Math.random() * options.length); // 0 of 1
    let computerChoice = options[randomIndex]; // dit zal nu "kop" of "munt" zijn

    // gebruiker een gokje laten doen
    // ook onmiddellijk omzetten naar kleine letters
    let userInput = prompt("Kop of munt?").toLowerCase();

    // variabele voor resultaat
    let result;

    // controleren of het een juiste gok was
    if (userInput === computerChoice) {
        wins++;
        result = "Joepie, het was inderdaad " + computerChoice;
    } else if (options.includes(userInput)) {
        result = "Jammer, het was " + computerChoice;
    } else {
        result = "Oei, je hebt iets verkeerd ingetypt!";
    }

    // resultaat tonen
    alert(result);
}

// eindresultaat
alert("Je hebt het " + wins + " keer goed geraden");