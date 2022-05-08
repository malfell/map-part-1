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

    // Removes the loading animation when the map loads
    let loading = document.getElementById('loadingBox');
    loading.remove();;

}

mapLocation();