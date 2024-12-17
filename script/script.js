let display = document.getElementById('display');
let currentOperation = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}
function operate(operator) {
    currentOperation = operator;
    shouldResetDisplay = true;
    display.dataset.previousValue = display.value;
}
function calculate() {
    if (!currentOperation) return;
    const prevValue = parseFloat(display.dataset.previousValue);
    const currentValue = parseFloat(display.value);
    let result;
    switch (currentOperation) {
        case '+':
            result = prevValue + currentValue;
            break;
        case '-':
            result = prevValue - currentValue;
            break;
        case '*':
            result = prevValue * currentValue;
            break;
        case '/':
            result = prevValue / currentValue;
            break;
        default:
            return;
    }
    display.value = result;
    currentOperation = '';
}
function clearDisplay() {
    display.value = '';
    currentOperation = '';
}
