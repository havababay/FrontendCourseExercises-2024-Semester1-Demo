console.log("Separate script file");

let tableElement = document.getElementById("table");

let people = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "London" },
    { name: "Bob", age: 35, city: "Paris" }
];

people.forEach((person) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${person.name}</td><td>${person.age}</td><td>${person.city}</td>`;
    tableElement.appendChild(row);
});