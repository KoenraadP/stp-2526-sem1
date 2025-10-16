"use strict";

// array met namen
let students = ["Mohamed", "Amir", "Sarah", "Kasper", "Sohail",
    "Ehsanullah", "Yasin", "Kenny", "Tim"];

// random positie index voor array maken
let randomIndex = Math.floor(Math.random() * students.length); // 0 - 8

// random naam tonen
console.log(students[randomIndex]);