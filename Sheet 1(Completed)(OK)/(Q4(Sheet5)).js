function splitString() {
    var inputspring = document.getElementById('inputString').value;
    var size = parseInt(document.getElementById('size').value);
    var outputDiv = document.getElementById('output');
    if (isNaN(size) || size < 0) {
        outputDiv.innerHTML = 'Please Enter a Valid size.';
        return;
    }
    var result = [];
    for (var i = 0; i < inputspring.length; i += size) {
        result.push(inputspring.slice(i, i + size));
    }
    outputDiv.innerHTML = "Resulting Array:[".concat(result.map(function (str) { return "".concat(str); }).join(','), "]");
}
