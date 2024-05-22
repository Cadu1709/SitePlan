const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("wind");
const windchill = document.getElementById("windchill");

// Temperature and wind speed for Brazil
let temp = 25; // Celsius
let wind = 5; // Kilometers per hour

// Convert temperature to Fahrenheit
const tempFahrenheit = (temp * 9/5) + 32;

// Convert wind speed to miles per hour
const windMph = (wind * 0.621371).toFixed(0);

const calculateWindChill = (temp, wind) => {
    if(temp <= 10 && wind > 5) {
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
        return `${windChill.toFixed(1)}°F`;
    } else {
        return "N/A";
    }
};

const windChill = calculateWindChill(temp, wind);

// Update HTML elements with the new values
temperature.innerHTML = `<strong>Temperature: </strong> ${tempFahrenheit}`;
windSpeed.innerHTML = `<strong>Wind: </strong> ${windMph} mph`;
windchill.innerHTML = `<strong>Wind Chill: </strong> ${windChill}`;