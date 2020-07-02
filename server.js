// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */

// Configure Express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 3000;
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    console.log('Server is Running!');
    console.log(port);
    // console.log(server);
}

// Get Route, returns projectData to the server code
app.get('/all', sendData);
function sendData(request, response){
    response.send(projectData);
};

// Post Route, adds incoming data to projectData
app.post('/add', callback);

function callback(request, response){
    projectData['temperature'] = request.body.temperature;
    projectData['date'] = request.body.date;
    projectData['content'] = request.body.content;
    response.send(projectData);    
}
