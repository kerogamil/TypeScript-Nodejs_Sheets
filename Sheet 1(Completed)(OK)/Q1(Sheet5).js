function removeRepetitions(arr) {
    var ElementCount = {};
    arr.forEach(function (element) {
        ElementCount[element] = (ElementCount[element] || 0) + 1;
    });
    return arr.filter(function (element) { return ElementCount[element] < 3; });
}
function processArray() {
    var inputArray = document.getElementById('inputArray');
    var outputDiv = document.getElementById('output');
    var arr = inputArray.value.split(',').map(function (num) { return parseInt(num.trim()); });
    var result = removeRepetitions(arr);
    outputDiv.innerHTML = "Processed Array: ".concat(result.join(','));
}
