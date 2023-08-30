function displayTime(event) {
  if (event.target.value.length > 0) {
    alert("hello!");
  }
}

let cityChoice = document.querySelector("#city-choice");
cityChoice.addEventListener("change", displayTime);
