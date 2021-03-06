"use strict";

//let myLastResult = document.getElementByTagName("span");
let myDisplay = document.getElementById("display");

let buttonZero = document.getElementById("button-0");
let buttonOne = document.getElementById("button-1");
let buttonTwo = document.getElementById("button-2");
let buttonThree = document.getElementById("button-3");
let buttonFour = document.getElementById("button-4");
let buttonFive = document.getElementById("button-5");
let buttonSix = document.getElementById("button-6");
let buttonSeven = document.getElementById("button-7");
let buttonEight = document.getElementById("button-8");
let buttonNine = document.getElementById("button-9");
let buttonPlus = document.getElementById("button-plus");
let buttonMinus = document.getElementById("button-minus");
let buttonMultiply = document.getElementById("button-multiply");
let buttonDivide = document.getElementById("button-divide");
let buttonEquals = document.getElementById("button-equals");
let buttonClear = document.getElementById("button-clear");

let numbButtons = [
  buttonZero,
  buttonOne,
  buttonTwo,
  buttonThree,
  buttonFour,
  buttonFive,
  buttonSix,
  buttonSeven,
  buttonEight,
  buttonNine
];

for (let i = 0; i < numbButtons.length; i++) {
  numbButtons[i].addEventListener("click", displayNumber);
}

let firstNumb = "";
let secondNumb = "";
let firstNumberEntered = false;
let secondNumberEntered = false;
let operator = "";
let result = null;

function displayNumber() {
  console.log(this.innerText);
  if (!firstNumberEntered) {
    if(!firstNumb)
      myDisplay.innerHTML = "";
    firstNumb += this.innerText;
    myDisplay.innerText += this.innerText;
  } else {
    secondNumberEntered = true;
    secondNumb += this.innerText;
    myDisplay.innerText += this.innerText;
  }
}

let numbOperators = [buttonPlus, buttonMinus, buttonDivide, buttonMultiply];

for (let i = 0; i < numbOperators.length; i++) {
  numbOperators[i].addEventListener("click", displayOperator);
}

function displayOperator() {
  console.log(this.innerText);
  if (firstNumb != "") {
    myDisplay.innerText += this.innerText;
    operator = this.innerText;
    firstNumberEntered = true;
  }
}

buttonClear.addEventListener("click", clear);

function clear() {
  myDisplay.innerHTML = "";
  firstNumb = "";
  secondNumb = "";
  firstNumberEntered = false;
  secondNumberEntered = false;
  operator = "";
  result = null;
}

buttonEquals.addEventListener("click", calculate, displayResult);

function calculate() {
  if (firstNumberEntered && secondNumberEntered) {
    switch (operator) {
      case "+":
        result = parseInt(firstNumb) + parseInt(secondNumb);
        break;

      case "-":
        result = parseInt(firstNumb) - parseInt(secondNumb);
        break;

      case "/":
        result = parseInt(firstNumb) / parseInt(secondNumb);
        break;

      case "*":
        result = parseInt(firstNumb) * parseInt(secondNumb);
        break;
    }
    displayResult();
  }
}

function displayResult() {
  myDisplay.innerText += " = ";
  myDisplay.innerText += result;
  firstNumb = "";
  secondNumb = "";
  firstNumberEntered = false;
  secondNumberEntered = false;
  operator = "";
  result = null;
}
