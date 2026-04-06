function isPrime(value:number):boolean{
let valid = true;
if(value <= 1||value === 4){
    valid = false;
    return valid;
}
if(value <= 3){
    return valid;
}
for(let i=2;i<(value/2);i++){
    if(value % i === 0){
        valid = false;
        return valid;
    }
}
return valid;
}
function showprimes():void{
    const numberinput = document.getElementById('Number') as HTMLInputElement;
    const resultDiv = document.getElementById('results') as HTMLDivElement;
    const numbers = numberinput.value.split('-').map(num=>parseInt(num.trim()));
    const primenumbers = [];
    for(let i = 0;i<numbers.length;i++){
        if(numbers.find(num=>isPrime(numbers[i]))){
            primenumbers.push(numbers[i]);
        }
    }
    resultDiv.innerHTML =`
    <table>
    <tr>
    <th>Prime Numbers</th>
    </tr>
    ${primenumbers.map(prime=>`<tr><td>${prime}</td></tr>`).join('')}
    </table>
    `;

}