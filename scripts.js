function add(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
};

let numOne;
let numTwo;
let operator;

function operate(operator, numOne, numTwo) {
    if (operator === "plus") {
        return add(numOne, numTwo);
    } else if (operator === "minus") {
        return subtract(numOne, numTwo);
    } else if (operator === "asterisk") {
        return multiply(numOne, numTwo);
    } else if (operator === "slash") {
        return divide(numOne, numTwo);
    }
};

