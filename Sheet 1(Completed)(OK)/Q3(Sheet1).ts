const findfactors = (): void=>{
    const inputElement = document.getElementById("numberInput") as HTMLInputElement;
    const number = parseInt(inputElement.value);
    if(isNaN(number) || number <= 0){
        alert('Please Enter a valid positive number.');
        return;
    }
    const factors = (num:number):number[] => {
        let result:number[] = [];
        for(let i=1;i<=num;i++){    
            if(num%i===0){
                result.push(i);
            }
        }
        return result;
    };
    const factorList = factors(number).join('-');
    const resultElement = document.getElementById("result") as HTMLParagraphElement;
    resultElement.textContent="factors: " +factorList+",Total: "+factors(number).length;
};