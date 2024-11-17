import { Destination } from "./classes/destination.js";

function onSaveDestination() {
    let form = document.getElementById("new-destination-form");

    let name = document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let airportName = document.getElementById("airport-name").value;
    let airportWebsite = document.getElementById("airport-website").value;
    let airportEmail = document.getElementById("airport-email").value;
    let imageUrl = document.getElementById("image-url").value;

    let destination = new Destination(name, code, airportName, airportWebsite, airportEmail, imageUrl);

    alert("Destination saved: " + JSON.stringify(destination));
}

window.onSaveDestination = onSaveDestination;