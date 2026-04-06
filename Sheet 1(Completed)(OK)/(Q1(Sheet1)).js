var add = function (a, b, c) { return a + b + (c || 0); };
var Subtract = function (a, b, c) { return a - b - (c || 0); };
var Multiply = function (a, b, c) { return a * b * (c || 0); };
var Divide = function (a, b, c) { return a / b / (c || 1); };
var reminder = function (a, b, c) { return a % b % (c || 1); };
var performoperations = function () {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var operand3 = parseFloat(document.getElementById("operand3").value);
    if (isNaN(operand1) || isNaN(operand2)) {
        alert("Please Enter Valid numbers for the first two operands.");
        return;
    }
    var results = 'Addition' + add(operand1, operand2, operand3) + '<br>Substraction:' + Subtract(operand1, operand2, operand3) + '<br>Multiplication:' + Multiply(operand1, operand2, operand3) + '<br>Division:' + Divide(operand1, operand2, operand3) + '<br>reminder:' + reminder(operand1, operand2, operand3);
    document.getElementById("result").innerHTML = results;
};
