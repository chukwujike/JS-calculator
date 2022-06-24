const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number_1 = parseFloat(prompt('Enter the first number: '));
const number_2 = parseFloat(prompt('Enter the second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number_1 + number_2;
}
else if (operator == '-') {
    result = number_1 - number_2;
}
else if (operator == '*') {
    result = number_1 * number_2;
}
else if (operator == "/"){
    result = number_1 / number_2;
} else {
    document.write("Invalid operator. Refresh the page and try again ")
}


document.write("The answer is " + result)