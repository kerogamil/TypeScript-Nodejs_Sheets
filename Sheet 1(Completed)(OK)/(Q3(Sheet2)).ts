interface PizzaOrder{
    name:string;
    size:string;
    toppings:string[];
}
function submitForm(){
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const sizeInput = document.getElementById('size') as HTMLSelectElement;
    const toppingsInput = document.querySelectorAll('input[name="toppings"]:checked') as NodeListOf<HTMLInputElement>;
    const nameError = document.getElementById('nameError') as HTMLSpanElement;
    const sizeError = document.getElementById('sizeError') as HTMLSpanElement;
    let hasError = false;

    nameError.textContent = '';
    sizeError.textContent = '';

    if(nameInput.value.trim() === ''){
        nameError.textContent = 'Name is required'
        hasError = true;
    }

    if(sizeInput.value === ''){
        sizeError.textContent = 'Size is Reqiure'
        hasError = true;
    }

    if(!hasError){
        const toppings = Array.from(toppingsInput).map(input => input.value);
        const order: PizzaOrder = {
            name:nameInput.value,
            size:sizeInput.value,
            toppings:toppings
        };
        alert(`Order Details:\nName: ${order.name}\nSize:${order.size}\nToppings: ${order.toppings.join(',')}`);
    }
}