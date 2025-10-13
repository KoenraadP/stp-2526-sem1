"use strict";

// array maken met enkele cijfers 
// een array wordt aangeduid met vierkante haakjes
let numbers = [4, 100, 30, 2];

// volledige array tonen
document.body.innerHTML += numbers + "<br>";
console.log(numbers);

// enkel het eerste element tonen
// het eerste element staat op plaats/index 0
document.body.innerHTML += numbers[0] + "<br>";

// tonen hoeveel elementen er in zitten
document.body.innerHTML += "Er zitten " + numbers.length + " cijfers in mijn array <br>";

// het laatste element tonen
// 'letterlijke' manier
document.body.innerHTML += numbers[3] + "<br>";

// betere manier voor laatste element
let lastIndex = numbers.length - 1;
document.body.innerHTML += numbers[lastIndex] + "<br>";

// array met string waarden in
let teachers = ["koenraad", "Sam", "mieke"];

// teachers alfabetisch sorteren
// let op: hoofdletters komen eerst
teachers.sort();

// gesorteerde array tonen
document.body.innerHTML += teachers + "<br>";

// cijfers sorteren van klein naar groot
// standaard sorteren werkt niet goed, kijkt enkel naar het eerste getal
numbers.sort();
document.body.innerHTML += numbers + "<br>";

// correcte manier om van klein naar groot te sorteren bij cijfers
numbers.sort(function(a,b){return a-b});
document.body.innerHTML += numbers + "<br>";

// cijfer array 'omdraaien' zodat alles
// in omgekeerde volgorde staat
numbers.reverse();
document.body.innerHTML += numbers + "<br>";

// eerste element verwijderen uit de array
let firstNumber = numbers.shift();
document.body.innerHTML += firstNumber + "<br>";
document.body.innerHTML += numbers + "<br>";

// laatste element verwijderen uit de array
let lastNumber = numbers.pop();
document.body.innerHTML += lastNumber + "<br>";
document.body.innerHTML += numbers + "<br>";

// poging om index op te vragen die niet meer bestaat
let thirdNumber = numbers[2];
document.body.innerHTML += thirdNumber + "<br>";

// numbers vervangen door nieuwe cijfers
numbers = [8,15,2,26,78,45];
document.body.innerHTML += numbers + "<br>";

// toon de eerste vier cijfers van de array
let firstFourNumbers = numbers.slice(0,4);
document.body.innerHTML += firstFourNumbers + "<br>";

// toon de laatste drie cijfers van de array
let lastThreeNumbers = numbers.slice(3);
document.body.innerHTML += lastThreeNumbers + "<br>";