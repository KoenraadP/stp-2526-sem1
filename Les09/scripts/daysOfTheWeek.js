"use strict";

// vandaag
let today = new Date();
// tijdelijk even datum op 12 oktober zetten
// today.setDate(11);

// lege variabele om in te vullen met de correcte dag in het Nederlands
let dayNl;

// cijfer voor huidige weekdag
// dit zal een cijfer geven van 0 (zondag) tot en met 6 (zaterdag)
let dayOfWeek = today.getDay(); 

// dayNl invullen op basis van dag
// bvb als het 0 is dan wordt er "zondag" geplaatst in dayNl

// versie met if
// if (dayOfWeek === 0) {
//     dayNl = "zondag";
// }
// if (dayOfWeek === 1) {
//     dayNl = "maandag";
// }

switch (dayOfWeek) {
    case 0:
        dayNl = "zondag"
        break;
    case 1:
        dayNl = "maandag"
        break;
    case 2:
        dayNl = "dinsdag"
        break;
    default:
        dayNl = "onbekend"
        break;
}

// zin tonen op pagina
document.body.innerHTML += "Vandaag is het " + dayNl + ".";
