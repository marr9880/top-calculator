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

let clearOnNextNum = false;

function operate(operator, numOne, numTwo) {
    if (operator === "+") {
        return add(numOne, numTwo);
    } else if (operator === "-") {
        return subtract(numOne, numTwo);
    } else if (operator === "*") {
        return multiply(numOne, numTwo);
    } else if (operator === "/") {
        return divide(numOne, numTwo);
    }
};

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".button-num");
const operatorButtons = document.querySelectorAll(".button-oper")
const decimalButton = document.querySelector(".button-dec");
const clearButton = document.querySelector("#clear");

let currentOperation = [];

numberButtons.forEach (button => {
    button.addEventListener("click", (e) => {
        if (clearOnNextNum) {
            display.value = "";
            clearOnNextNum = false;
        }
        let pressedButton = e.target;
        let buttonNumber = pressedButton.dataset.num;
        display.value += buttonNumber;
        currentOperation.push(buttonNumber);
    });
});

let clickCount = 0;

operatorButtons.forEach (button => {
    button.addEventListener("click", (e) => {
        clickCount++;
        if (clickCount === 1) {
            let pressedButton = e.target;
            let buttonOperator = pressedButton.dataset.oper;
            display.value = "";
            currentOperation.push(buttonOperator);
            decimalButton.disabled = false;
            let numOneArray = currentOperation.slice(0, -1);
            numOne = numOneArray.join('');
            let operatorArray = currentOperation.slice(-1);
            operator = operatorArray[0];
            currentOperation.length = 0;
        } else if (clickCount === 2) {
            let pressedButton = e.target;
            let buttonOperator = pressedButton.dataset.oper;
            currentOperation.push(buttonOperator);
            decimalButton.disabled = false;
            let numTwoArray = currentOperation.slice(0, -1);
            numTwo = numTwoArray.join('');
            let result = operate(operator,numOne,numTwo);
            display.value = result;
            let operatorArray = currentOperation.slice(-1);
            operator = operatorArray[0];
            if (operator === "+" ||
                operator === "-" ||
                operator === "*" ||
                operator === "/") {
                currentOperation = [result, operator]
                clickCount = 1;
                clearOnNextNum = true;
            } else {
                currentOperation = [result];
                clickCount = 0;
                clearOnNextNum = true;
            }
        }
    });
});    

decimalButton.addEventListener("click", (e) => {
    let decimalAdd = decimalButton.dataset.dec;
    display.value +=decimalAdd;
    currentOperation.push(decimalAdd);
    decimalButton.disabled = true;
    console.log(currentOperation);
});

clearButton.addEventListener("click", (e) => {
    display.value = "";
    currentOperation = [];
    clickCount = 0;
});