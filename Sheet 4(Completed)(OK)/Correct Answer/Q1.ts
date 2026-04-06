function hasNoRepetation(value:string):boolean{
    let valid=true;
    for(let i=0;i<value.length;i++){
        for(let j=0;j<value.length;j++){
            if(value[i]===value[j] && i !== j ){
                valid = false;
                return valid;
            }
        }
    }
    return valid;
}
function proccess():void{
const wordsinput = document.getElementById('words') as HTMLInputElement
const resultDiv = document.getElementById('result') as HTMLDivElement;
const words = wordsinput.value.split('-').map(word=>word.trim());
const wordsNoRepeted = [];
    for(let i=0;i<words.length;i++){     
        if(words.find(word=>hasNoRepetation(words[i]))){
            wordsNoRepeted.push(words[i]);
        }
    }
resultDiv.textContent = `Words with No Repeted:${wordsNoRepeted.join(',')}`;
}