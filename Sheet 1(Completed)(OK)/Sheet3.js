function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
function showPrimes() {
    var numbersInput = document.getElementById('numbers');
    var resultsDiv = document.getElementById('results');
    var numbers = numbersInput.value.split('-').map(function (num) { return parseInt(num.trim()); });
    var primes = numbers.filter(function (num) { return isPrime(num); });
    resultsDiv.innerHTML = "\n    <table>\n    <tr>\n    <th>Prime Numbers</th>\n    </tr>\n    ".concat(primes.map(function (prime) { return "<tr><td>".concat(prime, "</td></tr>"); }).join(''), "\n    </table>\n    ");
}
