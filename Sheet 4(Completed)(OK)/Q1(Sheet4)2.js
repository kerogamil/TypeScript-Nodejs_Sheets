function hasNoRepeatedChars(word) {
    return !word.split('').find(function (char, index, array) { return array.indexOf(char) !== index; });
}
function filterWordsWithUniqueChars(words) {
    return words.filter(function (word) { return hasNoRepeatedChars(word); });
}
function filterButton() {
    var input = document.getElementById('wordsInput').value;
    var words = input.split(',').map(function (word) { return word.trim(); }).filter(function (word) { return word.length > 0; });
    var filterWords = filterWordsWithUniqueChars(words);
    document.getElementById('result').innerHTML = "".concat(filterWords.length > 0 ? filterWords.join(',') : 'No words found without repeated charcters');
}
;
