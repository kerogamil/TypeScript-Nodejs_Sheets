function ConvertTemperature(){
    const celsiusInput = document.getElementById('celsius') as HTMLInputElement;
    const fahrenheitCheckbox = document.getElementById('fahrenheit') as HTMLInputElement;
    const kelvinCheckbox = document.getElementById('kelvin') as HTMLInputElement;
    const resultElement = document.getElementById('result') as HTMLParagraphElement;
    const celsius = parseFloat(celsiusInput.value);
let result = '';
if(fahrenheitCheckbox.checked){
    const fahrenheit = (celsius*9/5)+32;
    result+=`Fahrenheit:${fahrenheit.toFixed(2)}F<br>`;
}
if(kelvinCheckbox.checked){
    const kelvin = celsius+273.15;
    result+=`kelvin:${kelvin.toFixed(2)}F<br>`;
}
resultElement.innerHTML = result;
}