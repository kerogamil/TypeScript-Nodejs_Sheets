var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function performonstring(input) {
    var chars = input.split('');
    var res = __spreadArray([], chars, true);
    for (var i = 0; i < chars.length - 2; i += 4) {
        if (i % 2 === 0 && i + 2 < chars.length) {
            var temp = res[i];
            res[i] = res[i + 2];
            res[i + 2] = temp;
        }
    }
    return res.join('');
}
function process() {
    var inputst = document.getElementById('inputstring');
    var result = document.getElementById('result');
    var input = inputst.value.trim();
    result.textContent = "Processd string:".concat(performonstring(input));
}
