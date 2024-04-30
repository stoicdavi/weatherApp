
const apiKey = 'your API key here'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
//The above information is omitted due to privacy reasons but the app works well with the api key and url provided by openweathermap.org
const locationInput = document.querySelector('#locationInput')
const  searchButton = document.querySelector('#searchButton')
const  locationElement = document.querySelector('#location')
const  temperatureElement = document.querySelector('#temperature')
const descriptionElement = document.querySelector('#description')

searchButton.addEventListener('click', () => {
    const location = locationInput.value
    if(location){
        fetchWeather(location);
    }else{
        alert('Please enter a location')
    }
   
});
function fetchWeather(location){
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        locationElement.textContent = data.name
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`
        descriptionElement.textContent = data.weather[0].description
    })
    .catch(() => {
       console.log('An error occurred')
    });
}