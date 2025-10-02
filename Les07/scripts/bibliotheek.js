"use strict";

let basisLidgeld = 10;
let kortingLidgeld = 5;

let age = parseInt(prompt("Leeftijd?"));

if (age >= 26) {
    console.log("Lidgeld: " + basisLidgeld);
} else {
    console.log("Lidgeld: " + kortingLidgeld);
}

/* let lidgeld = 10;

let age = parseInt(prompt("Leeftijd?"));

if (age < 26) {
    lidgeld = lidgeld / 2;
}

console.log("Het lidgeld is: " + lidgeld); */