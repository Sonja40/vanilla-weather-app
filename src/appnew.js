function displayTemperature(response) {
  //console.log(response.data);
  let temperatureElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#city");
  let weatherElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  weatherElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "8429fab9a373o690ete5fa53ee0a6e14";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=8429fab9a373o690ete5fa53ee0a6e14&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
