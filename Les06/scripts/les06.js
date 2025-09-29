"use strict";

// twee cijfers opvragen via prompt
let number1 = parseInt(prompt("Cijfer 1"));
let number2 = prompt("Cijfer 2?");

// tweede 'string' pas nadien omzetten naar cijfer
number2 = parseInt(number2);
// alternatieve functions: parseFloat() en Number()

// optellen 
let sum = number1 + number2;

// tonen in console
console.log("De som is " + sum);