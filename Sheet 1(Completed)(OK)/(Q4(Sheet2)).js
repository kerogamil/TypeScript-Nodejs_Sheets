function findFactors() {
    var numberInput = document.getElementById('number');
    var factorsDiv = document.getElementById('factors');
    var number = parseInt(numberInput.value);
    var factors = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    console.log("Total number of factors: ".concat(factors.length));
    factorsDiv.innerHTML = '';
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    factors.forEach(function (factor) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.textContent = factor.toString();
        row.appendChild(cell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    factorsDiv.appendChild(table);
    if (factors.length % 2 === 0) {
        table.className = 'even-factors';
    }
    else {
        table.className = 'odd-factors';
    }
}
