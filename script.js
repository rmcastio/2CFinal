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

operationPerformance = (event) => {
    let operator = event.target.innerText

        switch (operator) {
            case "+":
                pendingVal = displayVal;
                display = '0';
                displayValElem.innerText = displayVal;
                evalStringArry.push(pendingVal);
                evalStringArry.push('+');
                break;

            case "-":
                pendingVal = displayVal;
                display = '0';
                displayValElem.innerText = displayVal;
                evalStringArry.push(pendingVal);
                evalStringArry.push('-');
                break;

            case "*":
                pendingVal = displayVal;
                display = '0';
                displayValElem.innerText = displayVal;
                evalStringArry.push(pendingVal);
                evalStringArry.push('*');
                break;

            case "/":
                pendingVal = displayVal;
                display = '0';
                displayValElem.innerText = displayVal;
                evalStringArry.push(pendingVal);
                evalStringArry.push('/');
                break;

            case "=":
                evalStringArry.push(displayVal);
                let evaluation = eval(evalStringArry.join(' ')); //switches to string
                displayVal = evaluation + '';
                console.log(typeof displayVal);
                displayValElem.innerText = displayVal
                evalStringArry = []; //clears arry
                break;
            default:
                break;
        }
}