function ConvertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitCheckbox = document.getElementById('fahrenheit');
    var kelvinCheckbox = document.getElementById('kelvin');
    var resultElement = document.getElementById('result');
    var celsius = parseFloat(celsiusInput.value);
    var result = '';
    if (fahrenheitCheckbox.checked) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        result += "Fahrenheit:".concat(fahrenheit.toFixed(2), "F<br>");
    }
    if (kelvinCheckbox.checked) {
        var kelvin = celsius + 273.15;
        result += "kelvin:".concat(kelvin.toFixed(2), "F<br>");
    }
    resultElement.innerHTML = result;
}
