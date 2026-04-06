var celsiusTofahrenhit = function (celsius) { return (celsius * 9 / 5) + 32; };
var celsiusTokelvin = function (celsius) { return celsius + 273.15; };
var convertTemperature = function () {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var conversionType = document.getElementById("ConversionType").value;
    if (isNaN(celsius)) {
        alert("Please Enter a Temerature in Celsius.");
        return;
    }
    var result = '';
    if (conversionType === 'farhenhit' || conversionType === 'both') {
        result += 'farhenhit: ' + celsiusTofahrenhit(celsius) + "<br>";
    }
    if (conversionType === 'kelvin' || conversionType === 'both') {
        result += 'kelvin: ' + celsiusTokelvin(celsius) + "<br>";
    }
    document.getElementById("result").innerHTML = result;
};
