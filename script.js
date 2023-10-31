// Append a number
function appendNumber(number) {
    document.getElementById('result').value += number;
}
// Append an operator
function appendOperator(operator) {
    var result = document.getElementById('result').value;
    if (result.charAt(result.length - 1) !== '+' && result.charAt(result.length - 1) !== '-' && result.charAt(result.length - 1) !== '*' && result.charAt(result.length - 1) !== '/') {
        result += operator;
    }
    document.getElementById('result').value = result;
}
// Clear
function clearResult() {
    document.getElementById('result').value = '';
}

// Calculate the result
function calculate() {
    var expression = document.getElementById('result').value;
    // Evaluate the expression.
    var result = eval(expression);
    document.getElementById('result').value = result;
}
function backspace() {
    var result = document.getElementById('result').value;
    // Remove the last character from the input field.
    result = result.slice(0, result.length - 1);
    document.getElementById('result').value = result;
}
function appendDecimal() {
    var result = document.getElementById('result').value;
    var r = result;
    // Split the result into operands at the operators.
    var operands = r.split(/[-+*/=]/);
    var len = operands.length;
    var operand = operands[len - 1];
    if (operand.indexOf('.') === -1) {
        result += '.';
    }
    document.getElementById('result').value = result;
}

