function appendValue(value) {
    document.getElementById('display').value += value;
}

function appendFunction(func) {
    document.getElementById('display').value += func + '(';
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.substring(0, currentValue.length - 1);
}