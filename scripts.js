const mathOperators = document.querySelectorAll('.btn.math-operator');
const equalSign = document.querySelector('#equal');
const decimalPoint = document.querySelector('#decimal');
const delBtn = document.querySelector('#del');
const clearBtn = document.querySelector('#clear');
const numpadButtons = document.querySelectorAll('.numpad .btn');
const primaryScreen = document.querySelector('.primary');
const secondaryScreen = document.querySelector('.secondary'); 
//! Test functions for add, subtract, multiply, divide and operate
const operation = [{}]
let temp = '';
let operation_str = '';

numpadButtons.forEach(button => button.addEventListener('click', populateDisplay));
mathOperators.forEach(button => button.addEventListener('click', inputNewOperand));
equalSign.addEventListener('click', addEqualSign);


function addEqualSign() {
    operation_str += temp;
    operation_str += ` ${this.innerText}`;
    operation['operand2'] = Number(temp);
    secondaryScreen.textContent = operation_str;
    primaryScreen.textContent = String(operate(operation.operand1, operation.operand2, operation.operator));
}

function inputNewOperand() {
    operation_str += temp;
    operation['operand1'] = Number(temp);
    operation_str += ` ${this.innerText} `;
    operation['operator'] = this.innerText;
    secondaryScreen.textContent = operation_str;
    temp = '';
}

function populateDisplay() {
    temp += this.innerText;
    primaryScreen.textContent = temp;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            const addition = add(num1, num2);
            return addition;
        case "-":
            const subtraction = subtract(num1, num2);
            return subtraction;
        case "x":
            const multiplication = multiply(num1, num2);
            return multiplication;
        case "/":
            const quotation = divide(num1, num2);
            return quotation;
        default:
            const errorMessage = "Cannot define operator"
            return errorMessage;
    }
}