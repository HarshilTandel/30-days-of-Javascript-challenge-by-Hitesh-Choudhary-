const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ae56fd3e32749186ab9fbcce309344b4'; // Replace with your actual API key

const cityForm = document.querySelector('#city-form');
const searchInput = document.querySelector('#search-input');
const loading = document.querySelector('.loading');
const error = document.querySelector(".error");
const weatherElm = document.querySelector('.weather');
const weatherBehaviorElm = document.querySelector("#behavior");
const weatherIconElm = document.querySelector("#weather-icon");
const temperatureElm = document.querySelector("#temp");
const humidityElm = document.querySelector("#humidity");
const windSpeedElm = document.querySelector("#wind-speed");
const cityElement = document.querySelector("#city");

cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = searchInput.value;
    if (!city || city.length === 0) return;
    const url = getRequestUrl(city);
    initializeState();
    const weatherData = await getWeatherData(url);
    if (weatherData) processWeatherData(weatherData);
    toggleLoading();
});

function getRequestUrl(city) {
    const apiUrl = new URL(WEATHER_API_URL);
    apiUrl.searchParams.append('q', city);
    apiUrl.searchParams.append('appid', API_KEY);
    apiUrl.searchParams.append('units', 'metric'); // For Celsius
    return apiUrl.href;
}

async function getWeatherData(url) {
    let response;
    try {
        response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (e) {
        console.error('Fetch error:', e);
        error.textContent = `Error: ${e.message}`;
        error.hidden = false;
        return null;
    }
    return await response.json();
}

function toggleLoading() {
    loading.toggleAttribute('hidden');
}

function initializeState() {
    toggleLoading();
    error.hidden = true;
    weatherElm.hidden = true;
}

function processWeatherData(data) {
    console.log(data); // For debugging

    const weather = data.weather[0];
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const city = data.name;

    const weatherBehavior = weather.description;
    const weatherIcon = weather.icon;

    weatherElm.hidden = false;
    weatherBehaviorElm.textContent = weatherBehavior;
    weatherIconElm.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
    temperatureElm.textContent = `${temperature} °C`;
    humidityElm.textContent = `${humidity} %`;
    windSpeedElm.textContent = `${windSpeed} m/s`;
    cityElement.textContent = city;
    cityElement.setAttribute('title', city);
}
