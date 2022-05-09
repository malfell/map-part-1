// I talked to Josh about this, and he said I could submit as this is.
//The Foursquare developer website isn't letting me create a new project.
//The button is still faded out, and support hasn't gotten back to me yet.


// MAP SETUP

// Gets the user's coordinates and then maps their location
async function mapLocation(){
    // Uses promise to obtain coordinates
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })

    //Uses coordinates to initialize the map
    let map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

    //Adds tilelayer to map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '15',
    }).addTo(map)

    //Marks user's location on the map
    let marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
    //Popup to inform the user that they are here
    marker.addTo(map).bindPopup('You are here.').openPopup();

    // Removes the loading animation when the map loads
    let loading = document.getElementById('loadingIcon');
    loading.remove();

}

mapLocation();

// Button for selecting desired place
let chosenPlace = document.getElementById('submitPlace');
//Eventlistener on the button
chosenPlace.addEventListener('click', async (event) => {
    event.preventDefault();
    //Get places value
    let place = document.getElementById('places').value;
    console.log(place)
})