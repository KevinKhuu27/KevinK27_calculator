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
        return divide(n, m);
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

oneKey.addEventListener('click', () => updateDisplay("1"));
twoKey.addEventListener('click', () => updateDisplay("2"));
threeKey.addEventListener('click', () => updateDisplay("3"));
fourKey.addEventListener('click', () => updateDisplay("4"));
fiveKey.addEventListener('click', () => updateDisplay("5"));
sixKey.addEventListener('click', () => updateDisplay("6"));
sevenKey.addEventListener('click', () => updateDisplay("7"));
eightKey.addEventListener('click', () => updateDisplay("8"));
nineKey.addEventListener('click', () => updateDisplay("9"));
zeroKey.addEventListener('click', () => updateDisplay("0"));

xKey.addEventListener('click', () => updateDisplay("*"));
divKey.addEventListener('click', () => updateDisplay("/"));
plusKey.addEventListener('click', () => updateDisplay("+"));
minusKey.addEventListener('click', () => updateDisplay("-"));

clearKey.addEventListener('click', () => clearAll());
equalKey.addEventListener('click', () => determineEquation());