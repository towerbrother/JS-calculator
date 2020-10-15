const display = document.querySelector(".calculator-display");
const keys = document.querySelector(".calculator-keys");

const state = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

const resetState = () => {
  state.displayValue = "0";
  state.firstOperand = null;
  state.waitingForSecondOperand = false;
  state.operator = null;
};

const calculate = (first, operator, second) => {
  switch (operator) {
    case "add":
      return parseFloat(first) + parseFloat(second);
    case "subtract":
      return parseFloat(first) - parseFloat(second);
    case "divide":
      return parseFloat(first) / parseFloat(second);
    case "multiply":
      return parseFloat(first) * parseFloat(second);
    case "equal":
      return parseFloat(second);
    default:
      throw "operator not recognised";
  }
};

const updateDisplay = () => {
  display.textContent = state.displayValue;
};

const inputNumber = value => {
  if (state.waitingForSecondOperand === true) {
    state.displayValue = value;
    state.waitingForSecondOperand = false;
  } else {
    state.displayValue === "0"
      ? (state.displayValue = value)
      : (state.displayValue += value);
  }
};

const inputDecimal = dot => {
  if (state.waitingForSecondOperand === true) {
    return;
  }

  if (!state.displayValue.includes(dot)) {
    state.displayValue += dot;
  }
};

const handleOperator = operator => {
  //handle multiple operator clicks in sequence
  if (state.operator && state.waitingForSecondOperand) {
    state.operator = operator;
    return;
  }

  if (state.firstOperand === null) {
    state.firstOperand = state.displayValue;
  } else if (state.operator) {
    const result = calculate(
      state.firstOperand,
      state.operator,
      state.displayValue
    );
    state.displayValue = result.toString();
    state.firstOperand = result.toString();
  }
  state.waitingForSecondOperand = true;
  state.operator = operator;
};

keys.addEventListener("click", e => {
  const key = e.target;
  const keyContent = key.textContent;
  const operator = key.id;

  if (!key.matches("button")) {
    return;
  }

  if (key.className === "operator") {
    handleOperator(operator);
    updateDisplay();
    return;
  }

  if (key.className === "decimal") {
    inputDecimal(keyContent);
    updateDisplay();
    return;
  }

  if (key.className === "clear") {
    resetState();
    updateDisplay();
    return;
  }

  if (key.className === "number") {
    inputNumber(keyContent);
    updateDisplay();
    return;
  }
});
