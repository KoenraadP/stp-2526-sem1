"use strict";

const APIURL = "https://api.openweathermap.org/data/2.5/weather?";
const KEY = "9f0b2498bc5c13f59ed35457a7418d68";
let currentWeather;

initialise();

// deze function wordt onmiddellijk uitgevoerd bij het inladen van de pagina
function initialise() {
    let btnUmbrella = document.getElementById("btn-umbrella");
    let parWeatherInfo = document.getElementById("par-weather-info");
    let parUmbrella = document.getElementById("par-umbrella");
    // code die het klikken op de knop verwerkt
    btnUmbrella.addEventListener("click", async function () {
        await getWeatherData();
        // eventueel currentWeather handmatig aanpassen als test
        // currentWeather = "Rain";
        // toon de (korte) beschrijving van het huidige weer in parWeatherInfo
        parWeatherInfo.innerHTML = currentWeather;
        // moet de paraplu gebruikt worden?
        // mogelijke opties: Thunderstorm, Drizzle, Rain, Snow, Mist, Clear, Clouds
        // paraplu kan nodig zijn bij Thunderstorm, Drizzle, Rain en Snow
        if (currentWeather === "Rain" || currentWeather === "Thunderstorm"
            || currentWeather === "Drizzle" || currentWeather === "Snow") {
            parUmbrella.innerHTML = "Paraplu wel nodig!";
        } else {
            parUmbrella.innerHTML = "Paraplu niet nodig.";
        }
    })
}

// deze function haalt een korte beschrijving van het huidige weer in Kortrijk op
// en plaatst deze string/tekst als waarde in de variabele currentWeather
// de function wordt uitgevoerd bij het klikken op de knop die al op de pagina staat
async function getWeatherData() {
    return fetch(APIURL + "&appid=" + KEY + "&q=Kortrijk&units=metric")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            currentWeather = data.weather[0].main
        })
        .catch(err => console.log(err));
}