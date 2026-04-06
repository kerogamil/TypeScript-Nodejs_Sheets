function hasNoRepetation(value) {
    var valid = true;
    for (var i = 0; i < value.length; i++) {
        for (var j = 0; j < value.length; j++) {
            if (value[i] === value[j] && i !== j) {
                valid = false;
                return valid;
            }
        }
    }
    return valid;
}
function proccess() {
    var wordsinput = document.getElementById('words');
    var resultDiv = document.getElementById('result');
    var words = wordsinput.value.split('-').map(function (word) { return word.trim(); });
    var wordsNoRepeted = [];
    var _loop_1 = function (i) {
        if (words.find(function (word) { return hasNoRepetation(words[i]); })) {
            wordsNoRepeted.push(words[i]);
        }
    };
    for (var i = 0; i < words.length; i++) {
        _loop_1(i);
    }
    resultDiv.textContent = "Words with No Repeted:".concat(wordsNoRepeted.join(','));
}
