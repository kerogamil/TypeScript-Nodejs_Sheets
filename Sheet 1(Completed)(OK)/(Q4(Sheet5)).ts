function splitString(){
const inputspring = (document.getElementById('inputString') as HTMLInputElement).value;
const size = parseInt((document.getElementById('size') as HTMLInputElement).value);
const outputDiv = document.getElementById('output') as HTMLDivElement;
if(isNaN(size)||size<0){
    outputDiv.innerHTML = 'Please Enter a Valid size.';
    return; 
} 
const result:string[] = [];
for(let i=0;i<inputspring.length;i+=size){
    result.push(inputspring.slice(i,i+size));
}
outputDiv.innerHTML = `Resulting Array:[${result.map(str => `${str}`).join(',')}]`;
}