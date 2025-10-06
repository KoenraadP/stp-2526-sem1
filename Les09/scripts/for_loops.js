"use strict";

// cijfer opvragen om mee te vermenigvuldigen
let baseNumber = prompt("Typ een cijfer in");

// lege variabele maken om telkens resultaat 
// van berekening in op te slaan
let result;

// starten bij 1
// 'loopen' zolang i kleiner is dan 11
// per iteratie van de lus/loop i + 1 doen
for (let i = 1; i < 11; i++) {
    result = i * baseNumber;
    document.body.innerHTML += result + "<br>";
}

// klassieke manier
// let multiplicationNumber = 0;

// multiplicationNumber++;
// result = multiplicationNumber * baseNumber;
// document.body.innerHTML += result + "<br>";

// multiplicationNumber++;
// result = multiplicationNumber * baseNumber;
// document.body.innerHTML += result + "<br>";