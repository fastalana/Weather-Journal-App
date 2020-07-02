/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '9812f495c39edfda37f91527ab04b2e4';
const countryCode = ',us&appid=';
// Sample API call:
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
// http://api.openweathermap.org/data/2.5/weather?zip=11355,us&appid=9812f495c39edfda37f91527ab04b2e4

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(event){
    event.preventDefault();
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeatherData(baseURL, zip, apiKey)
        // .then(function(data){
        //     postWeatherData('/add', {temperature: data.main.temperature, date: newDate, content})
        // })
}

// Function to GET Web API Data
const getWeatherData = async (baseURL, zip, apiKey) => {
    const response = await fetch(baseURL + zip + countryCode + apiKey);
    try{
        const data = await response.json();
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
        const newData = await require.json();
        return newData;
    } 
    catch(error){
        console.log('error', error);
    }
};

/* Function to GET Project Data */
