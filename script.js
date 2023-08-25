let n;
let m;
let operation = "";

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

