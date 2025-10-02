"use strict";

// geboortejaar opvragen met prompt
let birthYear = parseInt(prompt("Geboortejaar?"));
// variabele voor 'nu'
let today = new Date();
// variabele voor het huidige jaar
let currentYear = today.getFullYear(); // 2025
// 'ruwe' leeftijd berekenen
let age = currentYear - birthYear;

// leeftijd tonen op pagina
document.body.innerHTML += "<p>" + age + "</p>";

// variabele om leeftijdsgroep in te vullen
let ageGroup;

// leeftijdsgroep bepalen
if (age === 0) {
    ageGroup = "baby";
} else if (age <= 4) {
    ageGroup = "peuter";
} else if (age <= 6) {
    ageGroup = "kleuter";
} else if (age <= 12) {
    ageGroup = "schoolkind";
} else if (age <= 17) {
    ageGroup = "puber";
} else {
    ageGroup = "volwassene";
}

// tonen op pagina
document.body.innerHTML += "<p>" + ageGroup + "</p>";