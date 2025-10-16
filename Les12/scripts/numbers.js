"use strict";

// lege array maken
let numbers = [];

// vijf cijfers maken van 11 tot en met 20
// deze cijfers dan in de array plaatsen met .push()
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 10 + 11); // 11 tot en met 20
    numbers.push(randomNumber); // toevoegen aan numbers array
}

// cijfers toevoegen
numbers.push(100);
numbers.push(200);

// array tonen in console
console.log(numbers);

// van klein naar groot sorteren
numbers.sort(function(a,b){return a-b});

// nog eens tonen
console.log(numbers);

// toon enkel het eerste cijfer
console.log(numbers[0]);

// plaats de eerste twee cijfers in een nieuwe array
let firstTwo = numbers.slice(0,2);
console.log(firstTwo);

// toon enkel het laatste cijfer
let finalIndex = numbers.length - 1;
console.log(numbers[finalIndex]);