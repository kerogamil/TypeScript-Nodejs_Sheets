function findFactors(){
    const numberInput = document.getElementById('number') as HTMLInputElement;
    const factorsDiv = document.getElementById('factors') as HTMLDivElement;

    const number=parseInt(numberInput.value);
    const factors = [];
    for(let i=1;i<=number;i++){
        if(number % i === 0){
            factors.push(i);
        }
    }

    console.log(`Total number of factors: ${factors.length}`);
    factorsDiv.innerHTML='';
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    factors.forEach(factor => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = factor.toString();
        row.appendChild(cell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    factorsDiv.appendChild(table);
    if(factors.length % 2 === 0){
        table.className = 'even-factors';
    }
    else{
        table.className = 'odd-factors';
    }
}