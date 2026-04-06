;
var operations = {
    add: function (a, b) { return a + b; },
    substruct: function (a, b) { return a - b; },
    Multiply: function (a, b) { return a * b; },
    divide: function (a, b) { return b !== 0 ? a / b : 'Error:Division by zero'; },
    reminder: function (a, b) { return b !== 0 ? a % b : 'Error:Division by zero'; }
};
function Calculate() {
    var operand1Input = document.getElementById('operand1');
    var operand2Input = document.getElementById('operand2');
    var operand2error = document.getElementById('operand2Error');
    var resultDiv = document.getElementById('results');
    var operand1 = parseFloat(operand1Input.value);
    var operand2 = parseFloat(operand2Input.value);
    operand2error.textContent = "";
    if (isNaN(operand1) || isNaN(operand2)) {
        operand2error.textContent = "Please Enter a Valid numbers";
        return;
    }
    if (operand2 === 0) {
        operand2error.textContent = 'Error:zero not allowed for division/reminder operations';
        return;
    }
    var results = {
        Addition: operations.add(operand1, operand2),
        Substraction: operations.substruct(operand1, operand2),
        Multiplycation: operations.Multiply(operand1, operand2),
        Division: operations.divide(operand1, operand2),
        Reminder: operations.reminder(operand1, operand2)
    };
    resultDiv.innerHTML =
        "<table>\n    <tr>\n        <th>operation</th>\n        <th>Results</th>\n    </tr>\n    <tr>\n        <td>Addition</td>\n        <td>".concat(results.Addition, "</td>\n    </tr>\n    <tr>\n        <td>Substraction</td>\n        <td>").concat(results.Substraction, "</td>\n    </tr>\n    <tr>\n        <td>Multiplycation</td>\n        <td>").concat(results.Multiplycation, "</td>\n    </tr>\n    <tr>\n        <td>Division</td>\n        <td>").concat(results.Division, "</td>\n    </tr>\n    <tr>\n        <td>Reminder</td>\n        <td>").concat(results.Reminder, "</td>\n    </tr>\n    </table>");
}
