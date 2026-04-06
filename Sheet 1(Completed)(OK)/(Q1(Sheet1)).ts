const add=(a:number,b:number,c?:number):number=>a+b+(c||0);
const Subtract=(a:number,b:number,c?:number):number=>a-b-(c||0);
const Multiply=(a:number,b:number,c?:number):number=>a*b*(c||0);
const Divide=(a:number,b:number,c?:number):number=>a/b/(c||1);
const reminder=(a:number,b:number,c?:number):number=>a%b%(c||1);
const performoperations=():void => {
    const operand1 = parseFloat((document.getElementById("operand1") as HTMLInputElement).value);
    const operand2 = parseFloat((document.getElementById("operand2") as HTMLInputElement).value);
    const operand3 = parseFloat((document.getElementById("operand3") as HTMLInputElement).value);
    if(isNaN(operand1)||isNaN(operand2)){
        alert("Please Enter Valid numbers for the first two operands.");
        return;
    }
    const results='Addition'+add(operand1,operand2,operand3)+'<br>Substraction:'+Subtract(operand1,operand2,operand3)+'<br>Multiplication:'+Multiply(operand1,operand2,operand3)+'<br>Division:'+Divide(operand1,operand2,operand3)+'<br>reminder:'+reminder(operand1,operand2,operand3);
    (document.getElementById("result") as HTMLParagraphElement).innerHTML=results;
};