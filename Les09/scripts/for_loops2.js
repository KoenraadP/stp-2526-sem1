"use strict";

let endNumber = prompt("Typ een cijfer in");

// alle veelvouden van 3 tot aan endnumber tonen
for (let i = 3; i < endNumber; i += 3) {
    console.log(i);
}

// alternatief met modulus %
for (let i = 1; i < endNumber; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}