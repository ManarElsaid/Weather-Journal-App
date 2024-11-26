/* Global Variables */
baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
apiKey = "1e427ad5a56d02a3d21d870b54e3bc6a&units=imperial";

const generateBtn = document.querySelector('#generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Add an event listener for the element with the id: generate
generateBtn.addEventListener('click', performAction);

function performAction(e) {
    e.preventDefault();
    //
    const userResponse = document.querySelector("#feelings").value;
    const zipCode = document.querySelector('#zip').value;
    getData(baseUrl, zipCode, apiKey)
    .then(data => {
        postData('/add', {temp: data.main.temp, date: newDate, userresponse: userResponse})
    })
    .then(updatedData => {
        updateUI();
    }
        
    )
}

// asynch function to get the weather data
const getData = async (baseURL, zipCode, key) => {
    const res = await fetch(`${baseURL}${zipCode}&appid=${key}`);
    // console.log(`${baseURL}${zipCode}&appid=${key}`);

    try {
        const data = await res.json();
        console.log(data);
        return data;
    }catch(error) {
        console.log(`error: ${error}`);
    };
}

const postData = async (url='', data={}) => {
    const req = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await req.json();
        return newData;
    }catch(error){
        console.log(`error: ${error}`);
    }
};

const updateUI = async () => {
    const res = await fetch('/all');

    try {
        const allData = await res.json();
        document.querySelector("#date").innerHTML = allData.date;
        document.querySelector("#temp").innerHTML = allData.temp;
        document.querySelector("#content").innerHTML = allData.userresponse;

    }catch (error) {
        console.log(`error: ${error}`);
    }
};