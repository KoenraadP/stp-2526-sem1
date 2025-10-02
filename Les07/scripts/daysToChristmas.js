"use strict";

// 'vandaag' 
let today = new Date();

// huidig jaar
let currentYear = today.getFullYear();

// variabele voor datum kerstmis in het huidige jaar op te slaan
let christmasDate = new Date(currentYear, 11, 25);

// berekenen hoeveel milliseconden er zitten tussen nu en kerstmis
let millisecondsToXmas = christmasDate - today;

// één dag in milliseconden
// 24 uur * 60 minuten * 60 seconden * 1000 milliseconden
let dayInMilliseconds = 24 * 60 * 60 * 1000;

// hoeveel dagen (en uren) tot middernacht kerstmis
let timeTillXmas = millisecondsToXmas / dayInMilliseconds;

// afronden naar boven voor geheel getal in aantal dagen
let daysTillXmas = Math.ceil(timeTillXmas);

console.log("Nog " + daysTillXmas + " dagen tot kerstmis");
