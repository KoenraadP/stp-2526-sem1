"use strict";

let numbers = [];

for (let i = 0; i < 9; i++) {
    let newNumber = parseInt(prompt("Geef een cijfer"));
    numbers.push(newNumber);
}

console.log(numbers);
let userNumber = prompt("Het hoeveelste cijfer uit de array wil je zien?");
console.log(numbers[userNumber-1]);