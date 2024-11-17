import { destinationsData } from "./data/destinations.js";

const destinationSelect = document.getElementById("destination-code");
const originSelect = document.getElementById("origin-code");

destinationsData.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination.code;
    option.textContent = destination.name;
    destinationSelect.appendChild(option);

    const optionOrigin = document.createElement("option");
    optionOrigin.value = destination.code;
    optionOrigin.textContent = destination.name;
    originSelect.appendChild(optionOrigin);
});

const form = document.getElementById("flight-form");
form.addEventListener("submit", (event) => {
    const originValue = originSelect.value;
    const destinationValue = destinationSelect.value;

    const errorMessage = document.getElementById("error-message");
    if (originValue === destinationValue) {
        errorMessage.textContent = "Origin and destination cannot be the same.";
        event.preventDefault();
    }
});

form.addEventListener("input", () => {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
});


