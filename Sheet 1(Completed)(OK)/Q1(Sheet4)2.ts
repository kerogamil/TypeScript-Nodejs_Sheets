function hasNoRepeatedChars(word){
    return !word.split('').find((char,index,array)=>array.indexOf(char) !== index);
}
function filterWordsWithUniqueChars(words){
    return words.filter(word => hasNoRepeatedChars(word));
}
function filterButton(){
    const input = (document.getElementById('wordsInput') as HTMLInputElement).value;
    const words = input.split(',').map(word=>word.trim()).filter(word => word.length >0);
    const filterWords = filterWordsWithUniqueChars(words);
    (document.getElementById('result') as HTMLParagraphElement).innerHTML = `${filterWords.length > 0 ? filterWords.join(','):'No words found without repeated charcters'}`;
};