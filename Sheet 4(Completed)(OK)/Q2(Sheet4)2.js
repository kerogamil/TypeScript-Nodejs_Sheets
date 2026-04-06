var _a;
function processString(input) {
    var _a;
    var chars = input.split('');
    for (var i = 0; i < chars.length - 2; i += 4) {
        if (i + 2 < chars.length) {
            _a = [chars[i + 2], chars[i]], chars[i] = _a[0], chars[i + 2] = _a[1];
        }
    }
    return chars.join('');
}
(_a = document.getElementById('processBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var inputElement = document.getElementById('inputString');
    var resultElement = document.getElementById('result');
    if (inputElement && resultElement) {
        var input = inputElement.value;
        var output = processString(input);
        resultElement.textContent = output;
    }
});
window.addEventListener('load', function () {
    var processBtn = document.getElementById('processBtn');
    processBtn.click();
});
