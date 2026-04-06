function submitForm() {
    var nameInput = document.getElementById('name');
    var sizeInput = document.getElementById('size');
    var toppingsInput = document.querySelectorAll('input[name="toppings"]:checked');
    var nameError = document.getElementById('nameError');
    var sizeError = document.getElementById('sizeError');
    var hasError = false;
    nameError.textContent = "";
    sizeError.textContent = "";
    if (nameInput.value.trim() === "") {
        nameError.textContent = 'Name is required';
        hasError = true;
    }
    if (sizeInput.value === "") {
        sizeError.textContent = "Size is Reqiure";
        hasError = true;
    }
    if (!hasError) {
        var toppings = Array.from(toppingsInput).map(function (input) { return input.value; });
        var order = {
            name: nameInput.value,
            size: sizeInput.value,
            toppings: toppings
        };
        alert("Order Details:\nName: ".concat(order.name, "\nSize:").concat(order.size, "\nToppings: ").concat(order.toppings.join(',')));
    }
}
