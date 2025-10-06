"use strict";

let naamStudent = prompt("Naam");
let puntenWiskunde = parseFloat(prompt("Punten wiskunde?"));
let puntenNederlands = parseFloat(prompt("punten Nederlands"));

document.body.innerHTML += "<p>Naam: " + naamStudent + "</p>";

let output = 
    "<ul><li>Punten Wiskunde: " + puntenWiskunde + "</li>" + 
    "<li>Punten Nederlands: " + puntenNederlands + "</li></ul>";
    
document.body.innerHTML += output;

// let pointList = document.createElement("ul");
// let pointWiskunde = document.createElement("li");
// pointWiskunde.textContent = puntenWiskunde;
// pointList.append(pointWiskunde);
// document.body.append(pointList);