var add = function (a, b, c) { return a + b + (c || 0); };
var sub = function (a, b, c) { return a - b - (c || 0); };
var Multiply = function (a, b, c) { return a * b * (c || 1); };
var div = function (a, b, c) { return a / b / (c || 1); };
var mod = function (a, b, c) { return a % b % (c || 1); };
var perform = function () {
    var number1 = parseFloat(document.getElementById('operand1').value);
    var number2 = parseFloat(document.getElementById('operand2').value);
    var number3 = parseFloat(document.getElementById('operand3').value);
    if (isNaN(number1) || isNaN(number2)) {
        alert('Error:Please Enter Valid numbers.');
        return;
    }
    var result = "Addition:".concat(add(number1, number2, number3), "\tSubstraction:").concat(sub(number1, number2, number3), "\tMultiplication:").concat(Multiply(number1, number2, number3), "\tDivision:").concat(div(number1, number2, number3), "\tMod:").concat(Multiply(number1, number2, number3));
    document.getElementById('results').innerHTML = result;
};
