const trip = JSON.parse(window.localStorage.getItem("chosenTrip"))
console.log(trip);
const main = document.querySelector("main")
main.textContent = JSON.stringify(trip)
