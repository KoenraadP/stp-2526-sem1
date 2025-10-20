"use strict";

// array met 'soorten' kaarten
let suits = ["Schoppen", "Harten", "Klaveren", "Ruiten"];
// array met 'ranks' in kaartspel
let ranks = ["Twee", "Drie", "Vier", "Vijf", "Zes", "Zeven", "Acht",
    "Negen", "Tien", "Boer", "Vrouw", "Heer", "Aas"];

// lege array om volledig spel kaarten in op te slaan
let deckOfCards = [];

// dubbele for loop om alle combinaties te maken
// eerst alle suits in de 'outer loop'
for (let i = 0; i < suits.length; i++) {
    // 'inner loop' met alle ranks
    for (let j = 0; j < ranks.length; j++) {
        let newCard = suits[i] + " " + ranks[j];
        deckOfCards.push(newCard);
    }
}

// spel kaarten tonen in console
console.log(deckOfCards);