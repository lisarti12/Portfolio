const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const dotButton = document.querySelector('.dot');
const input = document.querySelector('input');
const numberButtons = document.querySelectorAll('.number');
const sumButton = document.querySelector('.sum');

numberButtons.forEach(function (number) {
    // Add event listener for each number button
    number.addEventListener("click", function () {
        if (input.value === '0' && number.textContent !== '.') {
            input.value = number.textContent;
        } else {
            input.value += number.textContent;
        }
    });
});

dotButton.addEventListener('click', function () {

    input.value += '.';

    
});

clearButton.addEventListener('click', function () {
    input.value = '';
    
});

function validateInput(inputElement) {
    // Remove non-numeric and non-decimal characters
    inputElement.value = inputElement.value.replace(/[^0-9.]/g, '');
    
}

operatorButtons.forEach(function (operator) {
    operator.addEventListener('click', function () {
        const inputValue = input.value;
        const lastCharacter = inputValue[inputValue.length - 1];

        if (inputValue === '' || /[\d.]/.test(lastCharacter)) {
            input.value += operator.textContent;
        }
    });
});


sumButton.addEventListener('click', function() {
    let equation = input.value;
    checkIfNumber(equation);
    calculate(equation);

})

function calculate(value) {
    
    calculatedValue = eval(value || null);

    if (isNaN(calculatedValue)) {
      input.value = "Can't divide 0 with 0";
      setTimeout(() => {
        input.value = "";
      }, 1300);
    } else {
      input.value = calculatedValue;
    }
}

function checkIfNumber(value){
    const separatorsRegex = /[+\-*\/]/;

// Split the string using the regular expression
    const resultArray = value.split(separatorsRegex);
    resultArray.forEach(function(number){
        if (isNaN(number)){
            input.value = 'Error';
        }
    })

}