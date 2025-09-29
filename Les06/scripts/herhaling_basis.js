"use strict";

// input variabelen maken en waarden toekennen
// let height = 5;
// let base = 7.7;

// alternatief met prompt
let height = prompt("Wat is de hoogte?");
let base = prompt("Wat is de basis?");

// output variabele maken en berekening doen
let area = height * base; // + - / * operatoren

// afronden resultaat
// let op: je krijgt met round geen cijfers na de komma
area = Math.round(area);

// resultaat op HTML pagina tonen
// += om toe te voegen aan bestaande HTML
document.body.innerHTML += 
    "<p> De oppervlakte van het parallellogram met basis " +
    base + " en hoogte " + height + 
    " is " + area + ".</p>";


// extra voorbeeld afronden
let number = 4.15698489;

// afgeronde waarde in console plaatsen
console.log(Math.round(number));
// alternatieven: Math.floor en Math.ceil

// alternatief waarbij je wel aantal cijfers na
// de komma kunt instellen
console.log(number.toFixed(3));