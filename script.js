function appendToDisplay(value) {
    document.getElementById("tela").value += value;
}

function calculate() {
    var display = document.getElementById("tela");
    var result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    document.getElementById("tela").value = "";
}
