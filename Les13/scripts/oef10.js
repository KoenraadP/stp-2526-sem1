"use strict";

// array met veel dubbele, driedubbele, ... elementen
// bedoeling is om een nieuwe array te maken met alle 'unieke' elementen
let fruit = ["Kiwi", "Mango", "Kiwi", "Banaan", "Appel",
    "Banaan", "Banaan", "Banaan", "Appel", "Banaan", "Kiwi", "Appel"];

// array alfabetisch sorteren
fruit.sort();

// tweede array om de unieke waarden op te slaan
let uniqueFruit = [];

// gesorteerde array tonen in console
console.log(fruit); // nu is mijn volgorde: Appel, Appel, Appel, Banaan, Banaan, ...

// loopen door de array
for (let i = 0; i < fruit.length; i++) {
    let currentFruit = fruit[i];
    let nextFruit = fruit[i+1];
    // controleren of beide niet hetzelfde zijn
    // dan weet ik wanneer het volgende element start
    if (currentFruit !== nextFruit) {
        // element opslaan in nieuwe array
        uniqueFruit.push(currentFruit);
    }
}

// nieuwe array met unieke elementen tonen
console.log(uniqueFruit);