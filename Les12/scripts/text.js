"use strict";

// lege array voor namen maken
let names = [];

// drie keer naam opvragen met prompt
// en telkens de naam in de array 'pushen'
for (let i = 0; i < 3; i++) {
    let firstName = prompt("Typ een voornaam in");
    // naam in array steken met allemaal kleine letters (lower case)
    names.push(firstName.toLowerCase());
}

// namen tonen
console.log(names);

// namen sorteren (standaard alfabetisch)
names.sort();

// nog eens namen tonen
console.log(names);

// alle namen onder elkaar op de pagina tonen
for (let i = 0; i < names.length; i++) {
    document.body.innerHTML += names[i] + "<br>";
}