"use strict";

// resultaat eerst opvangen in variabele en daarna tonen
let result = ageInDays_v1(40);
console.log(result);

// onmiddellijk resultaat in console tonen
console.log(ageInDays_v2(40));

// deze tonen al onmiddellijk ergens het resultaat (console of document)
ageInDays_v3(40);
ageInDays_v4(40);

// function zonder parameter maar met prompt
// ageInDays_v5();

// naam parameter mag eender wat zijn, liefst wel logisch houden
function ageInDays_v1(x) {
    let result = x * 365;
    return result;
}

function ageInDays_v2(age) {
    return age * 365;
}

function ageInDays_v3(age) {
    let result = age * 365;
    console.log(result);
}

function ageInDays_v4(age) {
    let result = age * 365;
    document.body.innerHTML += result;
}

function ageInDays_v5(){
    let age = prompt("Wat is uw leeftijd?");
    let result = age * 365;
    alert("Je leeft al ongeveer " + result + " dagen");
}

console.log(daysAlive("2025-10-22"));
document.body.innerHTML += "<br>" + daysAlive("1985-10-30");
// console.log(daysAlive(prompt("Voer een datum in")));

// function die op basis van je geboortedatum
// uitrekent hoeveel dagen je ongeveer al leeft
// datum moet zo ingetypt worden: "1990-9-5"
function daysAlive(dateInput) {
    // datum object aanmaken op basis van input
    let birthDate = new Date(dateInput);
    // vandaag opslaan
    let today = new Date();
    // tijd in milliseconden tussen datums berekenen
    let timeBetween = today - birthDate;
    // 1 dag in milliseconden
    let dayInMs = 24 * 60 * 60 * 1000;
    // aantal dagen berekenen
    let daysBetween = timeBetween / dayInMs;
    daysBetween = Math.floor(daysBetween);
    // resultaat als return terug geven
    return daysBetween;
}

console.log(checkAge(18));
console.log(checkAge(15));
console.log(checkAge(40));

// loterij function
function checkAge(age) {
    if (age >= 18) {
        return "Toegelaten!";
    }
    // de onderste return wordt uitgevoerd
    // als de 'if' uitkomt op 'false'
    return "Niet toegelaten";
}

console.log(checkAgeCorrect("2015-10-25"));

// loterij function v2
function checkAgeCorrect(dateInput) {
    // variabele voor vandaag
    let today = new Date();
    // datum object met geboortedatum maken
    let birthDate = new Date(dateInput);
    // variabele met verjaardag dit jaar
    let birthdayThisYear = new Date(today.getFullYear(),birthDate.getMonth(),birthDate.getDate());

    // voorlopige berekening leeftijd
    let age = today.getFullYear() - birthDate.getFullYear();
    
    // als de verjaardag dit jaar nog moet 'gebeuren'
    // dan eentje aftrekken bij leeftijd
    if (birthdayThisYear > today) {
        age--;
    }

    if (age >= 13) return "Je mag TikTok gebruiken!";
    return "Eigenlijk mag je nog geen TikTok gebruiken...";
}

areaCircle(3);

// areacircle
function areaCircle(radius) {
    let area = radius * radius * Math.PI;
    console.log(area);
}
