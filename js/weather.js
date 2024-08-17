import config from "../apikeys";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const NEW_APIKEY1 = config.NEW_APIKEY1;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${NEW_APIKEY1}`;
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)")
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        temp.innerText = data.main.temp;
        weather.innerText = data.weather[0].main;

    });
}
function onGeoError() {
    alert("Can't find you! No weather for you.");

    const noLoc = document.querySelector("#weather span:last-child");
    noLoc.innerText = " No weather for you :(";
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);