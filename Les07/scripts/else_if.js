"use strict";

// leeftijd ingeven
let age = 17;

// controle voor alcohol: groter dan of gelijk aan 18 --> alles mag
// 16-17: enkel bier en wijn
// onder de 16: geen alcohol
if (age >= 18) {
    console.log("Je mag alles drinken!");
} else if (age >= 16) {
    console.log("Enkel bier en wijn toegelaten.");
} else {
    console.log("Geen alcohol voor jou!");
}

// foute volgorde
/* if (age >= 16) {
    console.log("Enkel bier en wijn toegelaten.");
} else if (age >= 18) {
    console.log("Je mag alles drinken!");
} */


// let op: er MOET geen 'else' staan, kan ook zonder!

/* voorbeeld 2 */

let score = 65;
// graad leeg starten, invullen binnen de if...
let graad = "";

if (score >= 85) {
    graad = "Grootste onderscheiding";
} else if (score >= 75) {
    graad = "Grote onderscheiding";
} else if (score >= 65) {
    graad = "Onderscheiding";
} else if (score >= 50) {
    graad = "Geslaagd";
} else {
    graad = "Niet geslaagd";
}

// output
console.log(graad);

/* voorbeeld drie */

// drie resultaten, telkens op 10, dus minder dan 5 is niet geslaagd
let score1 = 11;
let score2 = 3;
let score3 = 6;

// we moeten controleren of alle drie de resultaten groter dan of gelijk aan 5 zijn
if (score1 >= 5 && score2 >= 5 && score3 >= 5) {
    alert("Geslaagd!");
} else {
    alert("Niet geslaagd.");
}

// alternatief: minstens één resultaat is groter dan of gelijk aan 5
if (score1 >= 5 || score2 >= 5 || score3 >= 5) {
    alert("Geslaagd!");
} else {
    alert("Niet geslaagd.");
}