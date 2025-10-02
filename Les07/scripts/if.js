"use strict";

/* eerste voorbeeld */

// variabele voor een score
let score = 49.1;

// als de score groter is dan 49, toon dan "Geslaagd!"
// anders: toon "Niet geslaagd."
if (score >= 50) {
    // hieronder de code als de voorwaarde 'true' is
    console.log("Geslaagd!");
} else {
    // hieronder de code als de voorwaarde 'false' is
    console.log("Niet geslaagd");
}

/* tweede voorbeeld */

// cijfer vragen aan gebruiker, omzetten naar numerieke waarde niet string
let input = parseInt(prompt("Geef een cijfer"));
// random getal maken van 0 tot en met 3
// .random() gaat vanaf 0 (inclusief) tot aan 0.99999999....
// vermenigvuldigen met drie: dan krijg je vanaf 0 tot aan 2.999999...
// daarna nog afronden
let number = Math.random() * 3;
number = Math.round(number);
console.log(number);

// controleren of input gelijk is aan number
if (input === number) {
    // document.body.innerHTML += input + " is wel gelijk aan " + number;
    alert("Goed geraden!");
} else {
    // document.body.innerHTML += input + " is niet gelijk aan " + number;
    alert("Helaas, fout geraden");
}