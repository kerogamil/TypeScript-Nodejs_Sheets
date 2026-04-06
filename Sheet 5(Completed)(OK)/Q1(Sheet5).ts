function removeRepetitions(arr:number[]):number[]{
const ElementCount:{[key:number]:number}={};
arr.forEach(element=>{
    ElementCount[element]=(ElementCount[element]||0)+1;
});
return arr.filter(element=>ElementCount[element]<3);
}
function processArray(){
const inputArray = document.getElementById('inputArray') as HTMLInputElement;
const outputDiv = document.getElementById('output') as HTMLDivElement;
const arr = inputArray.value.split(',').map(num => parseInt(num.trim()));
const result = removeRepetitions(arr);
outputDiv.innerHTML = `Processed Array: ${result.join(',')}`;
}