// MAP SETUP

// Geographical coordinates: 51.505, -0.09
//Zoom Level: 13
const map = L.map('map').setView([51.505, -0.09], 13);

//Need a map layer!
//That {s}, {z}, {x}, and {y} are very important here
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(map)