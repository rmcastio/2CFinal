"use strict";


const calClear = document.getElementById("button-clear");
const calOperator = document.getElementsByClassName("calculator-operator");
const calNumb = document.getElementsByClassName("calculator-number");
const displayNumbElement = document.getElementById("display");;
const displayNumbResult = document.getElementById("last-result");

let intDisplay = '0';
let pendNum;
let valStringArray = [];

disVal = (event) => {
    let btnChar = event.target.innerText;
    if(intDisplay === "0") {
        intDisplay = "";
    }
}

intDisplay += btnChar;
intDisplayElement.innerText = intDisplay;

for(let i = 0; i < calNumb.length; i++) {
    calNumb[i].addEventListener('click', valUpdateDisplay)
}

for(let i = 0; i < calOperator.length; i++){
    calOperator[i].addEventListener('click', doMath);
}

doMath = (event) => {
    const operator = event.target.innerText;

        switch (operator) {
            case '+':
                pendNum = intDisplay;
                intDisplay = '0';
                displayNumbElement.innerText = intDisplay;
                valStringArray.push(pendNum);
                valStringArray.push("+")
        }
}