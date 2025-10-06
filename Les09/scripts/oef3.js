"use strict";

let baseNumber = prompt("Typ een getal in"); // 3

if (baseNumber < 1 || baseNumber > 10) {
	document.body.innerHTML += 
	"Geef een getal in van 1 tot en met 10!";
} else {
    for (let i = 1; i <= 5; i++) {
        let result = i * baseNumber; 
        document.body.innerHTML += 
            i + " x " + baseNumber + " = " + result;
        document.body.innerHTML += "<br>";  
    }
}
