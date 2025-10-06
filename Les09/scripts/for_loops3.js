"use strict";

let monthNumber = 8; // januari is 0 dus 8 is september

// loop die alle dagen van oktober toont op de pagina
for (let i = 1; i <= 31; i++) {
    let day = new Date(2025, monthNumber, i);
    // enkel dag tonen als de maand nog correct is
    if (day.getMonth() === monthNumber) {
        document.body.innerHTML += day.toDateString() + "<br>";
    } else {
        // for loop helemaal stoppen
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    // loop afbreken/stoppen wanneer i gelijk is aan 6
    if (i === 6) {
        break;
    }
    console.log(i);
}