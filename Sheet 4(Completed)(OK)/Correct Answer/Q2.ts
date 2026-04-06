function performonstring(input:string):string{
    const chars = input.split('');
    const res = [...chars];
    for(let i=0;i<chars.length-2;i+=4){
        if(i%2 === 0&& i+2 < chars.length){
            const temp = res[i];
            res[i]=res[i+2];
            res[i+2]=temp;
        }
    }
    return res.join('');
}
function process():void{
    const inputst = document.getElementById('inputstring') as HTMLInputElement;
    const result = document.getElementById('result') as HTMLDivElement;
    const input = inputst.value.trim();
    result.textContent = `Processd string:${performonstring(input)}`;        
}