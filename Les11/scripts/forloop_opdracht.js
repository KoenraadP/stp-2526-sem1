"use strict";

let amount = parseInt(prompt("Hoeveel getallen wil je zien?"));

for (let i = 1; i <= amount; i++) {
    let randomNumber = Math.floor(Math.random() * 100 + 1); // vanaf 1 tot en met 100
    // document.body.innerHTML += "Getal " + i + ": " + randomNumber + "<br>";
}

