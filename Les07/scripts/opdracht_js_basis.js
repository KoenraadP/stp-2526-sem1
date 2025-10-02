"use strict";

let price;
let discount;

price = parseFloat(prompt("Prijs?"));
discount = parseFloat(prompt("Korting (in %)?"));

let discountAmount = price * (discount / 100);
let toPay = price - discountAmount;

