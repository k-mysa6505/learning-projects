const EPSILON = 1e-8;   //  許容誤差

let expression = [];
let currentInput = '0';

const allButtons = document.querySelectorAll('.btn-calc');
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        HandleInput(button.textContent);
        RenderCalculator();
    });
});

function RoundWithPrecision(value) {
    if (Math.abs(Math.round(value), value) < EPSILON) {
        return Math.round(value);
    }
    const precision = 10;
    return Number(value.toFixed(precision));
}

function CalculatePercentage() {
    const leftOperand = parseFloat(expression.shift());
    const operator = expression.shift();
    const rightOperand = parseFloat(expression.shift());
    let result;

    if (operator === '+' || operator === '-') {
        const percentage = leftOperand * (rightOperand / 100);
        if (operator === '+') {
            result = leftOperand + percentage;
        } else {
            result = leftOperand - percentage;
        }
    } else if (operator === '×' || operator === '÷') {
        const percentage = rightOperand / 100;
        if (operator === '×') {
            result = leftOperand * percentage;
        } else {
            result = leftOperand / percentage;
        }
    } else {
        result = rightOperand / 100;
    }

    return RoundWithPrecision(result);
}

function CalculateResult() {
    if (expression.length < 3) {
        return;
    }
    const leftOperand = parseFloat(expression.shift());
    const operator = expression.shift();
    const rightOperand = parseFloat(expression.shift());
    let result;

    if (operator === '÷') {
        result = leftOperand / rightOperand;
    } else if (operator === '×') {
        result = leftOperand * rightOperand;
    } else if (operator === '-') {
        result = leftOperand - rightOperand;
    } else if (operator === '+') {
        result = leftOperand + rightOperand;
    }

    return RoundWithPrecision(result);
}

function ValidateInput(token) {
    if (currentInput === '0') {
        if (token === '0') {
            return true;
        }
    }
    if (currentInput.includes('.')) {
        if (token === '.') {
            return true;
        }
    }
}

function HandleInput(token) {
    if (ValidateInput(token)) {
        return;
    }
    if (/^\d+$/.test(token)) {
        //  token is a number
        if (currentInput === '0') {
            currentInput = token;
        } else {
            currentInput += token;
        }
    } else {
        //  token is a operator
        const operator = token;
        currentInput = parseFloat(currentInput).toString();
        if (operator === 'C') {
            currentInput = '0';
            expression = [];
        } else if (operator === 'CE') {
            currentInput = '0';
        } else if (operator === '←') {
            currentInput = (parseFloat(currentInput / 10)).toString();
        } else if (operator === '1/x') {
            currentInput = (1 / parseFloat(currentInput)).toString();
        } else if (operator === 'x^2') {
            currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        } else if (operator === '√x') {
            currentInput = Math.sqrt(currentInput).toString();
        } else if (operator === '+/-') {
            currentInput = (parseFloat(currentInput) * -1).toString();
        } else if (operator === '.') {
            currentInput += '.';
        } else if (operator === '%') {
            expression.push(currentInput);
            expression.push(operator);
            currentInput = CalculatePercentage();
            expression = [];
        } else if (operator === '=') {
            expression.push(currentInput);
            expression.push(operator);
            currentInput = CalculateResult().toString();
            expression = [];
        } else {
            expression.push(currentInput);
            expression.push(operator);
            currentInput = '0';
        }
    }
}

function RenderCalculator() {
    const expressionDisplay = document.querySelector('.expression-display');
    const currentInputDisplay = document.querySelector('.current-input');

    expressionDisplay.textContent = expression.join(' ');
    currentInputDisplay.textContent = currentInput;
}

document.addEventListener('DOMContentLoaded', RenderCalculator);