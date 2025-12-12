//This one broke my brain. please offer feedback I feel like I'm missing something. 

//Diplay number and total
const display= document.querySelector(".display");
//Number buttons
const numberButton= document.querySelectorAll("button.number");
//Operator buttons
const operatorButtons= document.querySelectorAll("button.operator");
//Equal button
const equalButton= document.querySelector(".button.equals");
//claer button
const clearButton = document.querySelector(".button.clear");

//Holding input
let currentNumber= "";
let firstNumber="";
let secondNumber= "";
let currentOperator = "";

//Make Number Clickable
numberButton.forEach(function(button) {
    button.addEventListener("click", (event) => {
    secondNumber += button.textContent;
    display.textContent = secondNumber;
    });

});

//Make Operators Clickable
operatorButtons.forEach(function(button){
    button.addEventListener("click", (event) => {
        const value =button.textContent;
  //store numbers
        firstNumber = secondNumber;
        currentOperator = value;
        secondNumber = "";
    })
});

//Make equalbutton Clickable
equalButton.addEventListener("click", (event) => {
    if(firstNumber === "" || secondNumber === "") return;

    const a = Number (firstNumber);
    const b = Number (secondNumber);
    let result ="";

    
});

//Clear Button functional


clearButton.addEventListener("click", (event) => {
    firstNumber = "";
    secondNumber = "";
    currentNumber = "";
    display.textContent = "";
});

if (value === "c"){
    firstNumber = "";
    secondNumber= "";
    currentNumb= "";
    display.textContent= "";
    return;
};

//show results
display.textContent = result;

