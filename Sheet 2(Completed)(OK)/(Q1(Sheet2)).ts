interface mathOperation{
    add(a:number,b:number):number;
    substruct(a:number,b:number):number;
    Multiply(a:number,b:number):number;
    divide(a:number,b:number):number|string;
    reminder(a:number,b:number):number|string;
};
const operations:mathOperation = {
    add:(a,b)=>a+b,
    substruct:(a,b)=>a-b,
    Multiply:(a,b)=>a*b,
    divide:(a,b)=>b !== 0 ? a/b:'Error:Division by zero',
    reminder:(a,b)=>b !== 0 ? a%b:'Error:Division by zero'
};
function Calculate(){
    const operand1Input = document.getElementById('operand1') as HTMLInputElement;
    const operand2Input=document.getElementById('operand2') as HTMLInputElement;
    const operand2error=document.getElementById('operand2Error') as HTMLSpanElement;
    const resultDiv = document.getElementById('results') as HTMLDivElement;
    const operand1 = parseFloat(operand1Input.value);
    const operand2 = parseFloat(operand2Input.value);
    operand2error.textContent=``;
    if(isNaN(operand1)||isNaN(operand2)){
        operand2error.textContent=`Please Enter a Valid numbers`;
        return;
    }
    if(operand2 === 0){
        operand2error.textContent='Error:zero not allowed for division/reminder operations';
        return;
    }
    const results = {
        Addition:operations.add(operand1,operand2),
        Substraction:operations.substruct(operand1,operand2),
        Multiplycation:operations.Multiply(operand1,operand2),
        Division:operations.divide(operand1,operand2),
        Reminder:operations.reminder(operand1,operand2)
    };
    resultDiv.innerHTML = 
    `<table>
    <tr>
        <th>operation</th>
        <th>Results</th>
    </tr>
    <tr>
        <td>Addition</td>
        <td>${results.Addition}</td>
    </tr>
    <tr>
        <td>Substraction</td>
        <td>${results.Substraction}</td>
    </tr>
    <tr>
        <td>Multiplycation</td>
        <td>${results.Multiplycation}</td>
    </tr>
    <tr>
        <td>Division</td>
        <td>${results.Division}</td>
    </tr>
    <tr>
        <td>Reminder</td>
        <td>${results.Reminder}</td>
    </tr>
    </table>`;
}