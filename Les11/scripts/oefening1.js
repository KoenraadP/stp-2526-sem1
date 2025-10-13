"use strict";

// lege array aanmaken
let numbers = [];

// tien keer een random cijfer van 0 tot en met 100 aanmaken
for (let i = 0; i < 10; i++) {
    // random cijfer aanmaken
    let randomNumber = Math.round(Math.random() * 100);
    // random cijfer toevoegen aan array
    numbers.push(randomNumber);
}

// volledige reeks tonen
console.log(numbers);

// optie 1 voor grootste cijfer
// numbers.sort(function(a,b){return a-b});
// numbers.reverse();
// console.log(numbers[0]);

// optie 2
// numbers.sort(function(a,b){return a-b});
// console.log(numbers[numbers.length-1]);

// optie 3 
// numbers.sort(function(a,b){return b-a});
// console.log(numbers[0]);

// optie 4
console.log(Math.max(...numbers));


