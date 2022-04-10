// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.clear();
//   }
//   clear() {
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.operation = undefined;
//   }

//   delete() {}
//   appendNumber(number) {
//     this.currentOperand = number;
//   }

//   chooseOperation(operation) {}
//   computer() {}
//   updateDisplay() {
//     this.currentOperandTextElement.innerText = this.currentOperand;
//   }
// }

// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// const equalsButton = document.querySelectorAll("[data-equals]");
// const deleteButton = document.querySelectorAll("[data-delete]");
// const allClearButton = document.querySelectorAll("[data-all-clear]");
// const previousOperandTextElement = document.querySelectorAll(
//   "[data-previous-operand]"
// );
// const currentOperandTextElement = document.querySelectorAll(
//   "[data-current-operand]"
// );

// const calculator = new Calculator(
//   previousOperandTextElement,
//   currentOperandTextElement
// );

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });
// --------------------------------------------------------------------------------
const equalsButton = document.querySelector("[data-equals]");

equalsButton.addEventListener("click", () => {
  console.log("testing");
});

const numberButtons = document.querySelectorAll("[data-number]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
  });
});

// const previousOperandTextElement = document.querySelectorAll(
//   "[data-previous-operand]"
// );
// const currentOperandTextElement = document.querySelectorAll(
//   "[data-current-operand]"
// );

// this.currentOperandTextElement
