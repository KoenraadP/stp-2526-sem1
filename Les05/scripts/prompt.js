"use strict";

// invoer opvragen via een prompt pop-up
// let firstName = prompt("Wat is uw voornaam?");

// naam tonen in console
// console.log(firstName);

// twee cijfers opvragen in twee prompts
// waarde van invoer opslaan in variabelen
let number1 = prompt("Eerste cijfer?");
let number2 = prompt("Tweede cijfer?");

// tekst waarden omzetten naar cijfer waarden met parseInt
number1 = parseInt(number1);
number2 = parseInt(number2);

// kortere manier
// let number1 = parseInt(prompt("Eerste cijfer?"));
// let number2 = parseInt(prompt("Tweede cijfer?"));

// cijfers optellen en resultaat opslaan in variabele
let sum = number1 + number2;

// som tonen in console
console.log(sum);