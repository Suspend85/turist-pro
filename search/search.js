const tbody = document.getElementById("search-res-tbody");

const trips = [
  {
    id: 0,
    region: "Москва",
    name: "Сноуборд",
    level: "Легкий",
    start: "09-03-22",
    end: "14-03-22",
    zones: 5,
  },
  {
    id: 2,
    region: "Санкт-Петербург",
    name: "Лыжи",
    level: "Легкий",
    start: "15-03-22",
    end: "20-03-22",
    zones: 5,
  },
];

const renderRow = ({ id, region, name, level, start, end, zones }) =>
  `<tr>
    <td>${region}</td>
    <td>${name}</td>
    <td>${level}</td>
    <td>${start}</td>
    <td>${end}</td>
    <td>${zones}</td>
    <td><button type="button" data-id="${id}">Выбрать</button></td>
</tr>`;

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { region } = params;  // const region = params.region - тоже самое
tbody.innerHTML = trips.filter(trip => trip.region === region).map(renderRow).join("");


tbody.addEventListener('click', event => {
    if (event.target.nodeName !== "BUTTON") {
        return
    }
    const id = +event.target.dataset.id
    const trip = trips.find(trip => trip.id === id)
    window.localStorage.setItem('chosenTrip', JSON.stringify(trip))
    window.location.href = "/zones/"   // window.open('zones') - открыть в новом окне
    // console.log(event.target.type);
    // console.log(event.target.nodeName)
})
