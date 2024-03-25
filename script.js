function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.innerText += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.innerText = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
