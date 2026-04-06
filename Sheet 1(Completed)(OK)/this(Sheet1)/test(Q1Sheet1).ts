const add=(a:number,b:number,c?:number):number=>a+b+(c||0);
const sub=(a:number,b:number,c?:number):number=>a-b-(c||0);
const Multiply=(a:number,b:number,c?:number):number=>a*b*(c||1);
const div=(a:number,b:number,c?:number):number=>a/b/(c||1);
const mod=(a:number,b:number,c?:number):number=>a%b%(c||1);
const perform=():void=>{
    const number1 = parseFloat((document.getElementById('operand1') as HTMLInputElement).value);
    const number2 = parseFloat((document.getElementById('operand2') as HTMLInputElement).value);
    const number3 = parseFloat((document.getElementById('operand3') as HTMLInputElement).value);
    if(isNaN(number1)||isNaN(number2)){
        alert('Error:Please Enter Valid numbers.');
        return;
    }
    let result =`Addition:${add(number1,number2,number3)}\tSubstraction:${sub(number1,number2,number3)}\tMultiplication:${Multiply(number1,number2,number3)}\tDivision:${div(number1,number2,number3)}\tMod:${Multiply(number1,number2,number3)}`;
    (document.getElementById('results') as HTMLParagraphElement).innerHTML = result;
}