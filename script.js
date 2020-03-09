const displayValElem = document.getElementById("display");
const buttonNumbers = document.getElementsByClassName("calculator-number");
const buttonOperators = document.getElementsByClassName("calculator-operator")

let displayVal = '0';
let pendingVal;
let evalStringArry = [];

liveDisplayVal = (event) => {
    let buttonText = event.target.innerText;
    if(displayVal === "0") {
        displayVal = "";
    }
}

displayVal += buttonText;
displayValElem.innerText = displayVal;

operationPerformance = (event) => {}