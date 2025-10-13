"use strict";

// array met enkele string waarden maken
let shoppingList = ["Cheese", "Bread", "Coffee"];

// array volledig tonen op pagina
document.body.innerHTML += shoppingList + "<br>";

document.body.innerHTML += "<br>";

// ieder apart element tonen op de pagina onder elkaar
// hiervoor kun je een for loop gebruiken
// i start op 0 want eerste element ("Cheese") staat op index 0 in de array
// .length is op dit moment 3 want er staan 3 items in de array
for (let i = 0; i < shoppingList.length; i++) {
    document.body.innerHTML += shoppingList[i] + "<br>";
}

// alternatieve manieren (moet je nog niet kennen)
document.body.innerHTML += "<br>";

for (let i in shoppingList) {
    document.body.innerHTML += shoppingList[i] + "<br>";
}

document.body.innerHTML += "<br>";

for (let item of shoppingList) {
    document.body.innerHTML += item + "<br>";
}

document.body.innerHTML += "<br>";

shoppingList.forEach(item => {
    document.body.innerHTML += item + "<br>";
});

document.body.innerHTML += "<br>";

// één element toevoegen aan array
shoppingList[3] = "Juice";
document.body.innerHTML += shoppingList + "<br>";

// eerste alternatief
shoppingList[shoppingList.length] = "Carrot";
document.body.innerHTML += shoppingList + "<br>";

// beste optie, gebruik maken van ingebouwde function
shoppingList.push("Milk");
document.body.innerHTML += shoppingList + "<br>";

document.body.innerHTML += "<br>";

let citrusFruit = ["Orange", "Mandarin", "Lime"];
let berries = ["Strawberry", "Raspberry", "Blueberry"];
// lege array die nog moet opgevuld worden
let fruit = [];

// door arrays loopen om zaken toe te voegen aan nieuwe array
for (let i = 0; i < citrusFruit.length; i++) {
    // huidig element uit citrusFruit array opvragen
    let currentItem = citrusFruit[i];
    // toevoegen aan fruit array
    fruit.push(currentItem);
}

// veel korter alternatief
// for (let item of citrusFruit) {
//     fruit.push(item);
// }

for (let i = 0; i < berries.length; i++) {
    // huidig element uit berries array opvragen
    let currentItem = berries[i];
    // toevoegen aan fruit array
    fruit.push(currentItem);
}

// fruit array weer tonen
document.body.innerHTML += fruit + "<br>";