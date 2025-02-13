
function convertTemperature() {
    const temperatureValue = parseFloat(document.getElementById('tempInput').value);
    const conversionType = document.getElementById('temperature').value;
    let result;

    if (isNaN(temperatureValue)) {
        alert('Por favor, insira um valor válido para temperatura.');
        return;
    }

    if (conversionType === 'celsiusToFahrenheit') {
        result = (temperatureValue * 9/5) + 32; 
        document.getElementById('tempResult').innerHTML = `${temperatureValue}°C é igual a ${result.toFixed(2)}°F`;
    } else {
        result = (temperatureValue - 32) * 5/9; 
        document.getElementById('tempResult').innerHTML = `${temperatureValue}°F é igual a ${result.toFixed(2)}°C`;
    }
}


function convertLength() {
    const lengthValue = parseFloat(document.getElementById('lengthInput').value);
    const conversionType = document.getElementById('length').value;
    let result;

    if (isNaN(lengthValue)) {
        alert('Por favor, insira um valor válido para distância.');
        return;
    }

    if (conversionType === 'metersToKilometers') {
        result = lengthValue / 1000; 
        document.getElementById('lengthResult').innerHTML = `${lengthValue} metros é igual a ${result.toFixed(3)} km`;
    } else {
        result = lengthValue * 1000; 
        document.getElementById('lengthResult').innerHTML = `${lengthValue} km é igual a ${result.toFixed(0)} metros`;
    }
}
