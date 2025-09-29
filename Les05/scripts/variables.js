"use strict";

// oppervlakte rechthoek berekenen
// dit is lengte maal breedte

// variabele maken --> let 
let length = 7;
let width = 5;

// vermenigvuldigen --> *
let result = length * width;

// resultaat tonen in console
console.log(result);

// resultaat tonen op document
document.body.innerHTML += result;

// nieuwe waarden voor length en width
length = 12;
width = 128;

// nieuwe berekening
result = length * width;

// opnieuw tonen in console
console.log(result);

// volledige zin maken met result
console.log("Het resultaat is " + result + ".");

// voorbeeld variabele zonder waarde
// wordt als 'undefined' getoond
let test;
console.log(test);

// ++ testen
let number = 10;
console.log(number++);
console.log(number);

// andere manier
number = number + 1;

// text concatenation
// (tekst samenvoegen met +)
// variabelen volgens camelCase
let firstName = "Koenraad";
let lastName = "Pecceu";
let fullName = firstName + " " + lastName;
console.log(fullName);

// constanten --> kun je later niet meer van waarde veranderen
// decimalen met een PUNT niet met een komma
const pi = 3.14;
let radius = 4;
let circumference = 2 * radius * pi;
console.log("De omtrek is " + circumference); // 25.12

// poging nieuwe waarde te geven aan pi
// pi = 6;

// gebruik maken van 'ingebouwde' pi waarde
console.log(Math.PI);