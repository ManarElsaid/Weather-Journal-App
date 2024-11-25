// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
app.listen(port, () => {
    console.log(`Running On Localhost: ${port}`);
})

// Add the GET route that returns the projectData object
app.get('/all', (res, req) => {
    res.send(projectData);
})

// Add the POST route that adds incoming data to the projectData
app.post('/add', (res, req) => {
    let data = req.body;
    projectData = {
        temp: data.temp,
        date: data.date,
        userresponse: data.userresponse,
    }
})