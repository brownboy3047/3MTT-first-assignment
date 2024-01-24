const display = document.getElementById("display");

let currentInput = "";
let operator = "";
let previousInput = "";

function updateDisplay() {
  display.value = currentInput || "0";
}

//function to display the current value picked
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

//function to input the operator,make the  previousInput = currentInput
function setOperator(op) {
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  if (operator && previousInput && currentInput) {
    const num1 = parseFloat(previousInput); //parseFloat is converting the string to a floating point number
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case "+":
        currentInput = (num1 + num2).toString();
        break;
      case "-":
        currentInput = (num1 - num2).toString();
        break;
      case "*":
        currentInput = (num1 * num2).toString();
        break;
      case "/":
        currentInput = (num1 / num2).toString();
        break;
      default:
        break;
    }

    operator = "";
    previousInput = "";
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  previousInput = "";
  updateDisplay();
}
