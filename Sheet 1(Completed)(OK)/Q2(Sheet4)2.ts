function processString(input:string):string{
const chars = input.split('');
for(let i=0;i<chars.length-2;i+=4){ 
        if(i+2<chars.length){
            [chars[i],chars[i+2]] = [chars[i+2],chars[i]];
        }
    }
    return chars.join('');
}
document.getElementById('processBtn')?.addEventListener('click',()=>{
    const inputElement = document.getElementById('inputString') as HTMLInputElement;
    const resultElement = document.getElementById('result') as HTMLDivElement;
    if(inputElement && resultElement){
        const input = inputElement.value;
        const output = processString(input);
        resultElement.textContent = output;
    }
});
window.addEventListener('load',()=>{
    const processBtn = document.getElementById('processBtn') as HTMLButtonElement;
    processBtn.click();
});