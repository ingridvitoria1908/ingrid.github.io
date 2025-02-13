let currentInput = '';
let prevInput = '';
let operation = null;


function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}


function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}


function chooseOperation(op) {
    if (currentInput === '') return;
    if (prevInput !== '') {
        calculateResult();
    }
    operation = op;
    prevInput = currentInput;
    currentInput = '';
}


function clearDisplay() {
    currentInput = '';
    prevInput = '';
    operation = null;
    updateDisplay();
}

function calculateResult() {
    let result;
    const prev = parseFloat(prevInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Não é possível dividir por 0!');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    prevInput = '';
    updateDisplay();
}
