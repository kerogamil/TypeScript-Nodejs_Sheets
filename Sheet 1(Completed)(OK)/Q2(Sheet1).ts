const celsiusTofahrenhit=(celsius:number):number=>(celsius * 9/5)+ 32;
const celsiusTokelvin=(celsius:number):number=>celsius + 273.15;
const convertTemperature=():void=>{
const celsius = parseFloat((document.getElementById("celsiusInput") as HTMLInputElement).value);
const conversionType = (document.getElementById("ConversionType") as HTMLSelectElement).value;

if(isNaN(celsius)){
   alert("Please Enter a Temerature in Celsius.");
   return;
}
let result='';
if(conversionType === 'farhenhit' || conversionType === 'both'){
result += 'farhenhit: '+celsiusTofahrenhit(celsius)+"<br>";    
}
if(conversionType === 'kelvin' || conversionType === 'both'){
    result += 'kelvin: '+celsiusTokelvin(celsius)+"<br>";
}

(document.getElementById("result") as HTMLParagraphElement).innerHTML = result;
};