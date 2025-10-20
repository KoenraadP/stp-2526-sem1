"use strict";

// invoer 
let input = "025468"; // op het einde moet dit zijn 0-254-6-8
// let input = prompt("Typ een cijferreeks in");

// input string omzetten naar een array
// lege string --> ieder karakter wordt één element binnen de array
let collection = input.split("");

// array testen
console.log(collection);
console.log(collection[6]);

// loopen door de volledige array
for (let i = 0; i < collection.length; i++) {
    let currentNumber = collection[i];
    let nextNumber = collection[i + 1]
    // controleren of ze beide 'even' zijn
    // even = perfect deelbaar door 2
    if (currentNumber % 2 === 0 && nextNumber % 2 === 0) {
        // dash/streepje toevoegen op de index plaats van nextNumber
        // deze index plaats zal dus i+1 zijn
        collection.splice(i + 1, 0, "-");
    }
}

// array tonen in console
console.log(collection);

// array weer omvormen naar string
let output = collection.join("");

// output tonen
console.log(output);