"use strict";

// vragen naar hoofdstad van België in prompt
// antwoord opslaan in variabele answer
let answer = prompt("Wat is de hoofdstad van België");

// bijhouden hoeveel keer we geprobeerd hebben te antwoorden
let attempts = 1;

// zolang het juiste antwoord ("Brussel") niet ingevoerd werd
// prompt blijven herhalen en bijhouden hoeveel pogingen we nodig haddn
while (answer.toLowerCase() !== "brussel") {
    // aantal pogingen verhogen
    attempts++;
    // opnieuw prompt tonen en waarde answer veranderen
    answer = prompt("Wat is de hoofdstad van België");
}

console.log("Goed antwoord, je hebt hiervoor "
        + attempts + " pogingen nodig gehad.");