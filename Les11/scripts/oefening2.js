"use strict";

// lege array om te beginnen
let names = [];

for (let i = 0; i < 5; i++) {
    let newName = prompt("Typ een naam in");
    // naam opslaan in allemaal kleine letters
    newName = newName.toLowerCase();
    names.push(newName);
}

// volledige array tonen
console.log(names);
// array sorteren
names.sort();
// gesorteerde versie tonen
console.log(names);