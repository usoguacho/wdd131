
// Footer: Current Year & Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


// Static Weather Values (Rosario, Argentina — metric)
const temperature = 8;   // °C
const windSpeed = 20;     // km/h


// Wind Chill Calculation (Metric formula — Environment Canada)
// Valid when temp <= 10°C and wind speed > 4.8 km/h
function calculateWindChill(temp, wind) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);
}
// Display Wind Chill — only if conditions are met
const windChillElement = document.getElementById("weather-windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}