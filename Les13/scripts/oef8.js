"use strict";

// array met een heleboel cijfers in
// het cijfer 2 komt hier het 'meest' in voor --> dat willen we uitzoeken met code
let numbers = [1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 7];

// variabele om bij te houden hoeveel keer een element voorkomt in de array
let occurrences = 1;
// variabele om bij te houden welk 'aantal' het grootst was
let mostOccurrences = 0;
// variabele om bij te houden welk element het meest voorkomt
let most = 0;

// for loop die de volledige array doorloopt
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    let nextNumber = numbers[i + 1];
    // als beide hetzelfde zijn, occurrences doen optellen
    if (currentNumber === nextNumber) {
        occurrences++;
        // als het huidige aantal occurrences groter is dan de 
        // momenteel opgeslagen most occurrences
        // verzet dan most occurences naar de waarde van occurences
        if (occurrences > mostOccurrences) {
            most = numbers[i];
            mostOccurrences = occurrences;
        }
    } else {
        // occurrences resetten
        occurrences = 1;
    }
}

console.log(most + " komt " + mostOccurrences + " keer voor");