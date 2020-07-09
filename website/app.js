/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=9812f495c39edfda37f91527ab04b2e4&units=imperial';
// Sample API call:
// api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={your api key}&units=imperial
// http://api.openweathermap.org/data/2.5/weather?zip=11355&appid=9812f495c39edfda37f91527ab04b2e4&units=imperial

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(event){
    event.preventDefault();
    const zip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;

    getWeatherData(baseURL, zip, apiKey)
        .then(function(data){
            // console.log(data.content)
            postWeatherData('/add', {temperature: data.main.temp, date: newDate, content})
        })
        .then(function (newData){
            updateClient()
        })
    // form.reset();
}

// Function to GET Web API Data
const getWeatherData = async (baseURL, zip, apiKey) => {
    const response = await fetch(baseURL + zip + apiKey);
    try{
        const data = await response.json();
        // console.log(data.main.temp);
        return data;
    } 
    catch(error){
        console.log("error", error);
    }
}

/* Function to POST data */
const postWeatherData = async(url = '', data = {})=>{
    const request = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify({
            temperature: data.temperature,
            date: data.date,
            content: data.content
        })
    })
    try{
        const newData = await request.json();
        return newData;
    } 
    catch(error){
        console.log('error', error);
    }
};

const updateClient = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json()
        console.log(allData.content);
        document.getElementById('date').innerHTML = "On " + allData.date;
        document.getElementById('temp').innerHTML = "the temperature was " + allData.temperature + " degrees, ";
        document.getElementById('content').innerHTML = "and you felt " + allData.content + ".";
    }
    catch (error) {
        console.log("error", error);
    }
};