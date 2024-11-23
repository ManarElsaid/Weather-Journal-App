/* Global Variables */
baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
apiKey = "1e427ad5a56d02a3d21d870b54e3bc6a&units=imperial";

const generateBtn = document.querySelector('#generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Add an event listener for the element with the id: generate
document.addEventListener('click', performAction);

function performAction(e) {
    e.preventDefault();
    const zipCode = document.querySelector('#zip').value;
    getData(baseUrl, zipCode, apiKey);
}

// asynch function to get the weather data
const getData = async (baseURL, zipCode, key) => {
    const res = await fetch(`${baseURL}&appid${key}`);

    try {
        const data = await res.json();
    }
}
