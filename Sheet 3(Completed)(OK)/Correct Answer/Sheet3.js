function isPrime(value) {
    var valid = true;
    if (value <= 1 || value === 4) {
        valid = false;
        return valid;
    }
    if (value <= 3) {
        return valid;
    }
    for (var i = 2; i < (value / 2); i++) {
        if (value % i === 0) {
            valid = false;
            return valid;
        }
    }
    return valid;
}
function showprimes() {
    var numberinput = document.getElementById('Number');
    var resultDiv = document.getElementById('results');
    var numbers = numberinput.value.split('-').map(function (num) { return parseInt(num.trim()); });
    var primenumbers = [];
    var _loop_1 = function (i) {
        if (numbers.find(function (num) { return isPrime(numbers[i]); })) {
            primenumbers.push(numbers[i]);
        }
    };
    for (var i = 0; i < numbers.length; i++) {
        _loop_1(i);
    }
    resultDiv.innerHTML = "\n    <table>\n    <tr>\n    <th>Prime Numbers</th>\n    </tr>\n    ".concat(primenumbers.map(function (prime) { return "<tr><td>".concat(prime, "</td></tr>"); }).join(''), "\n    </table>\n    ");
}
