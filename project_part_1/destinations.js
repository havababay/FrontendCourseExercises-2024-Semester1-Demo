import { destinationsData } from "./data/destinations.js";

const destinationsTable = document.getElementById("destinations-table");

const tableHeader = document.createElement("tr");
tableHeader.innerHTML = `
        <th>Name</th>
        <th>Code</th>
        <th>Airport Name</th>
        <th>Airport Website</th>
        <th>Airport Email</th>
        <th>Image</th>
    `;
destinationsTable.appendChild(tableHeader);

destinationsData.forEach((destination) => {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${destination.name}</td>
        <td>${destination.code}</td>
        <td>${destination.airportName}</td>
        <td>${destination.airportWebsite}</td>
        <td>${destination.airportEmail}</td>
        <td><img src="${destination.imageUrl}" alt="${destination.name}" height="100" width="100"></td>
    `;
  destinationsTable.appendChild(row);
});

export function navigateToDestinationForm() {
  window.location.href = "new-destination.html";
}

window.navigateToDestinationForm = navigateToDestinationForm;
