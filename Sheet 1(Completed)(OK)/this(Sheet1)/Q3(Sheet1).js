var findfactors = function () {
    var inputElement = document.getElementById("numberInput");
    var number = parseInt(inputElement.value);
    if (isNaN(number) || number <= 0) {
        alert('Please Enter a valid positive number.');
        return;
    }
    var factors = function (num) {
        var result = [];
        for (var i = 1; i <= num; i++) {
            if (num % i === 0) {
                result.push(i);
            }
        }
        return result;
    };
    var factorList = factors(number).join('-');
    var resultElement = document.getElementById("result");
    resultElement.textContent = "factors:" + factorList + ",Total: " + factors(number).length;
};
