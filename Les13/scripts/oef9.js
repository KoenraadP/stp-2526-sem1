"use strict";

let input = "Creo Warm Innovatief Kwaliteitsvol";
// moet worden: "cREO wARM iNNOVATIEF kWALITEITSVOL"

// string splitsen naar een array
let letters = input.split("");

// array bekijken in console
console.log(letters);

// door de array loopen
for (let i = 0; i < letters.length; i++) {
    // controleren of huidige letter een hoofdletter is
    if (letters[i] === letters[i].toUpperCase()) {
        // omzetten naar kleine letter
        letters[i] = letters[i].toLowerCase();
    } else {
        // omzetten naar hoofdletter
        letters[i] = letters[i].toUpperCase();
    }
}

// letters uit array weer samenplakken in een string
let output = letters.join("");

// output bekijken in console
console.log(output)