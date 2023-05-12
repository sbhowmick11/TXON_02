// This function clear all the values in the display box
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values in the display box
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result eval is a function to evaluate the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}