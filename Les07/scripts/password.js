"use strict";

let lastName = "pEcceu";
let phoneNumber = "0123456789";
let zipCode = "8500";

// wachtwoord variabele
// leeg starten
let password = "";

// eerste stuk: eerste twee letters van lastName
// in omgekeerde volgorde en de eerste letter
// in lower case (kleine letter), tweede in upper case (hoofdletter)
password += lastName.charAt(1).toLowerCase();
password += lastName.charAt(0).toUpperCase();

// tweede stuk: tweede en derde karakter uit telefoonnummer
password += phoneNumber.slice(1,3);

// laatste stuk: eerste cijfer postcode in kwadraat (tot de tweede)
password += zipCode.charAt(0) ** 2;

// test resultaat
console.log(password);