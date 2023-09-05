let display_val = "";
let answer = "";

function add (n, m)
{
    return n + m;
}

function subtract (n, m)
{
    return n - m;
}

function multiply (n, m)
{
    return n * m;
}

function divide (n, m)
{
    return n / m;
}

function operate (n, m, operator)
{
    if (operator == "+")
        return add(n, m);
    else if (operator == "-")
        return subtract(n, m);
    else if (operator == "*")
        return multiply(n, m);
    else if (operator == "/")
    {
        if (m == 0)
            return "Error";
        return divide(n, m).toFixed(3);
    }
}

function getInput (givenInput)
{
    if (givenInput == "*" || givenInput == "/" || givenInput == "+" || givenInput == "-")
    {
        checkChaining();
        if (display_val == "")
            display_val += answer;
        display_val = display_val + " " + givenInput + " ";
    }    
    else
        display_val += givenInput;

    updateDisplay();
}

function updateDisplay ()
{
    const displayInput = document.getElementById('input');
    displayInput.textContent = display_val;
}

function updateResult (givenInput)
{
    const displayOutput = document.getElementById('output');
    displayOutput.textContent = givenInput;
}

function clearAll ()
{
    display_val = "";
    updateDisplay("");
    updateResult("");
    display_val = "";
    answer = "";
}

function calculate ()
{
    if (!validateInput())
        updateResult("Error");
    else 
    {
        listTerms = display_val.split(" ");
        let n = parseInt(listTerms[0]);
        let m = parseInt(listTerms[2]);
        let operator = listTerms[1];
        display_val = operate(n,m,operator);
        updateResult(display_val);
    }
    answer = display_val;
    display_val = "";
}

function checkChaining ()
{
    listTerms = display_val.split(" ");
    if (listTerms.length >= 3)
        calculate();
}

function validateInput ()
{
    listTerms = display_val.split(" ");
    if (!(Number.isInteger(parseInt(listTerms[0]))))
        return false;
    if (listTerms.length == 1)
        display_val += " + 0";
    if (listTerms[2] == "")
        return false;
    return true;
}

function answerPressed ()
{
    display_val += answer;
    updateDisplay();
}

function deleteInput ()
{
    if (display_val.charAt(display_val.length - 1) == " ")
        display_val = display_val.substring(0, display_val.length - 3);
    else
        display_val = display_val.substring(0, display_val.length - 1);
    updateDisplay();
}

const oneKey = document.getElementById("1");
const twoKey = document.getElementById("2");
const threeKey = document.getElementById("3");
const fourKey = document.getElementById("4");
const fiveKey = document.getElementById("5");
const sixKey = document.getElementById("6");
const sevenKey = document.getElementById("7");
const eightKey = document.getElementById("8");
const nineKey = document.getElementById("9");
const zeroKey = document.getElementById("0");

const xKey = document.getElementById("x");
const divKey = document.getElementById("div");
const plusKey = document.getElementById("+");
const minusKey = document.getElementById("-");

const decimalKey = document.getElementById(".");
const expKey = document.getElementById("exp");
const delKey = document.getElementById("del");
const clearKey = document.getElementById("clear");
const ansKey = document.getElementById("ans");
const equalKey = document.getElementById("=");

oneKey.addEventListener('click', () => getInput("1"));
twoKey.addEventListener('click', () => getInput("2"));
threeKey.addEventListener('click', () => getInput("3"));
fourKey.addEventListener('click', () => getInput("4"));
fiveKey.addEventListener('click', () => getInput("5"));
sixKey.addEventListener('click', () => getInput("6"));
sevenKey.addEventListener('click', () => getInput("7"));
eightKey.addEventListener('click', () => getInput("8"));
nineKey.addEventListener('click', () => getInput("9"));
zeroKey.addEventListener('click', () => getInput("0"));

xKey.addEventListener('click', () => getInput("*"));
divKey.addEventListener('click', () => getInput("/"));
plusKey.addEventListener('click', () => getInput("+"));
minusKey.addEventListener('click', () => getInput("-"));

clearKey.addEventListener('click', () => clearAll());
equalKey.addEventListener('click', () => calculate());

ansKey.addEventListener('click', () => answerPressed());

delKey.addEventListener('click', () => deleteInput());