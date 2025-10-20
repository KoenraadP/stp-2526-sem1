"use strict";

// functions uitvoeren

// simpele function die enkel een specifieke string toont in console
sayHello();

// function die een string meekrijgt als parameter en deze toont in de body
saySomething("Creo");
saySomething("Mijn naam is Koenraad");
saySomething("De les is gedaan om 16:15");

// function die de oppervlakte van een rechthoek berekent
// op basis van een opgegeven lengte en breedte
let area1 = areaRectangle(5, 7); // 35
console.log(area1);

console.log(areaRectangle(3, 9)); // 27

// function die de string "Hello World" toont in de console
function sayHello() {
    console.log("Hello World");
}

// function die gekozen tekst toont op 
// de pagina in de body in een alinea
function saySomething(someText) {
    let paragraph = "<p>" + someText + "</p>";
    document.body.innerHTML += paragraph;
}

// function die de oppervlakte van een rechthoek berekent
// en 'terug' geeft als resultaat (return)
function areaRectangle(length, width) {
    // bereken de oppervlakte en sla het resultaat op in variabele area
    let area = length * width;
    // retourneer het resultaat zodat dit de
    // 'uitkomst' van de function is
    return area;
}
