"use strict";

// new Date() --> 'nu'
let today = new Date();
console.log(today);

// eigen datum maken
let birthday = new Date(2025,9,30);
console.log(birthday);

// rekenen met datums
// uitkomst = waarde in milliseconden
let daysToBirthday = birthday - today;
console.log(daysToBirthday);

// hoeveel milliseconden zitten er in 24 uur? (1 dag)
let dayInMilliseconds = 24 * 60 * 60 * 1000;
console.log(dayInMilliseconds);

// daysToBirthday waarde delen door 1 dag in milliseconden
daysToBirthday = daysToBirthday / dayInMilliseconds;
console.log(daysToBirthday);

// afronden naar boven / plafond (ceiling)
daysToBirthday = Math.ceil(daysToBirthday);
console.log(daysToBirthday);