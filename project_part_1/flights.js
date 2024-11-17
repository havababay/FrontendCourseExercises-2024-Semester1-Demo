import {flightsData} from "./data/flights.js";

const flightsTable = document.getElementById("flights-table");

const tableHeader = document.createElement("tr");
tableHeader.innerHTML = `
    <th>Flight Number</th>
    <th>Destination Code</th>
    <th>Departure Time</th>
    <th>Arrival Time</th>
    <th>Seats</th>
`;

flightsTable.appendChild(tableHeader);

flightsData.forEach((flight) => {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${flight.flightNumber}</td>
        <td>${flight.destinationCode}</td>
        <td>${flight.originTime}</td>
        <td>${flight.destinationTime}</td>
        <td>${flight.seats}</td>
    `;
  flightsTable.appendChild(row);
});

function navigateToFlightForm() {
  window.location.href = "new-flight.html";
}

window.navigateToFlightForm = navigateToFlightForm;