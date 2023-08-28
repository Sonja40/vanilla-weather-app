let now = new Date();
let currentDate = document.querySelector("#currentDate");

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = weekDays[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentDate.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#mainCity");
  let city = document.querySelector("#city-input");
  cityElement.innerHTML = `${city.value}`;
}
let form = document.querySelector("#city-input");
form.addEventListener("submit", searchCity);

function tempCelsius(event) {
  event.preventDefault();
  let celsiusDegree = document.querySelector("#current-temp");
  celsiusDegree.innerHTML = `20`;
}
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", tempCelsius);

function tempFahrenheit(event) {
  event.preventDefault();
  let fahrenheitDegree = document.querySelector("#current-temp");
  fahrenheitDegree.innerHTML = `67`;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", tempFahrenheit);

let searchLocation = document.querySelector("#search-bar");
searchLocation.addEventListener("enter", locationButton);

function displayWeather(response) {
  console.log(response.data);
  console.log(response.data.name);
  document.querySelector("#mainCity").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function currentPosition(city) {
  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(displayWeather);
}

function locationButton(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  currentPosition(city);
}

function displayLocationButton(position) {
  console.log(position);
  let apiKey = "3f6be1c407b0d9d1933561808db358ba";
  let units = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(url).then(displayWeather);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayLocationButton);
}

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", displayLocationButton);
