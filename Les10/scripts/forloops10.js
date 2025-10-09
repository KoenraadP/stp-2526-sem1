"use strict";

// inleiding pagina
document.body.innerHTML += "<p>Oplopende loop:</p>"

// oplopende loop die van 1 tot en met 10 gaat
// en deze cijfers ook toont
for (let i = 1; i <= 10; i++) {
    // huidige waarde van i tonen op pagina
    document.body.innerHTML += i + "<br>";
}

// versie met while
document.body.innerHTML += "<p>Nog eens hetzelfde maar met while:"

// teller aanmaken, waar wil je beginnen
let i = 1;

// tot hoe ver wil je gaan? met while
while (i <= 10) {
    document.body.innerHTML += i + "<br>";
    i++;
}

// tekst als melding dat de loop gedaan is
document.body.innerHTML += "<p>Loop gedaan!</p>";

// tekst opvragen
// let text = prompt("Wat wil je tonen?");
let text = "Creo";

// aantal keer opvragen
// let endNumber = parseInt(prompt("Hoeveel keer wil je de tekst zien?"));
let endNumber = 3;

// tekst 5 keer tonen
for (let i = 0; i < endNumber; i++) {
    document.body.innerHTML += "Dit is de " + (i + 1) + "e keer:<br>";
    document.body.innerHTML += "De naam van mijn school is<br>"
    document.body.innerHTML += text + "<br><br>";
}

document.body.innerHTML += "<p>Aflopende loop:</p>";

// cijfers vanaf 10 tot en met 1 tonen
for (let i = 10; i >= 1; i--) {
    document.body.innerHTML += i + "<br>";
}

document.body.innerHTML += "<br>";

// oefening 3 uit cursus

// let number = prompt("Geef een getal in van 1 tot 10");
let number = 5;
let result = 0;

if (number <= 0 || number > 10) { //controle of de gebruiker wel een correct cijfer ingeeft
    document.body.innerHTML += "Geef een getal in van 1 tot 10!";
} else {
    
    for (let i = 1; i < 6; i++) {
        result = number * i; //je zou ook hier kunnen beginnen met 'let', dan moet je het in principe niet bovenaan al declareren
        document.body.innerHTML += i + " x " + number + " = " + result + "<br>";             
    }
}