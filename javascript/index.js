function displayTime(event) {
  if (event.target.value.length > 0) {
    let currentCity = document.querySelector(".current-city");
    let currentTime = document.querySelector(".current-time");
    let currentDate = document.querySelector(".current-date");
    let selectedTime = moment().tz(event.target.value).format("HH:mm A");
    let selectedDate = moment()
      .tz(event.target.value)
      .format("dddd, Do MMMM YYYY");
    currentCity.innerHTML = `${event.target.value}`;
    currentTime.innerHTML = `${selectedTime}`;
    currentDate.innerHTML = `${selectedDate}`;
  }
}

let cityChoice = document.querySelector("#city-choice");
cityChoice.addEventListener("change", displayTime);

function displayNewYorkTime() {
  let newYorkTime = document.querySelector(".new-york-time");
  let newYorkDate = document.querySelector(".new-york-date");
  newYorkTime.innerHTML = moment().tz("America/New_York").format("HH:mm A");
  newYorkDate.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd, Do MMMM YYYY");
}

function displayLondonTime() {
  let londonTime = document.querySelector(".london-time");
  let londonDate = document.querySelector(".london-date");
  londonTime.innerHTML = moment().tz("Europe/London").format("HH:mm A");
  londonDate.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd, Do MMMM YYYY");
}
function displaySydneyTime() {
  let sydneyTime = document.querySelector(".sydney-time");
  let sydneyDate = document.querySelector(".sydney-date");
  sydneyTime.innerHTML = moment().tz("Australia/Sydney").format("HH:mm A");
  sydneyDate.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("dddd, Do MMMM YYYY");
}

displayNewYorkTime();
displayLondonTime();
displaySydneyTime();

setInterval(displayNewYorkTime, 30000);
setInterval(displayLondonTime, 30000);
setInterval(displaySydneyTime, 30000);
