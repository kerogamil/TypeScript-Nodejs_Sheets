function isPrime(num:number):boolean{
    if(num<=1)return false;
    if(num<=3)return true;
    if(num % 2 === 0 || num % 3 === 0)return false;
    for(let i=5;i*i<=num;i+=6){
        if(num % i === 0 || num % (i+2) === 0)return false;
    }
    return true;
}
function showPrimes(){
    const numbersInput = document.getElementById('numbers') as HTMLInputElement;
    const resultsDiv = document.getElementById('results') as HTMLDivElement;
    const numbers = numbersInput.value.split('-').map(num=>parseInt(num.trim()))
    const primes = numbers.filter(num=>isPrime(num));
    resultsDiv.innerHTML = `
    <table>
    <tr>
    <th>Prime Numbers</th>
    </tr>
    ${primes.map(prime=>`<tr><td>${prime}</td></tr>`).join('')}
    </table>
    `;
}