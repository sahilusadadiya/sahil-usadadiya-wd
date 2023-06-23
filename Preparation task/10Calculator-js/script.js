function appendToScreen(value) {
    document.getElementById('result').value += value;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteCharacter() {
    var currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculate() {
    var result = document.getElementById('result').value;
    var finalResult = eval(result);
    document.getElementById('result').value = finalResult;
}
