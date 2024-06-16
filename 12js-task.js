// Write a JavaScript function that takes two numbers and an operator 
// ('+', '-', '*', '/') as arguments and returns the result of the arithmetic operation.
function calculate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}
// // Write a JavaScript function that takes a number as a ar
// gument and returns it's square value
function square(number) {
    return number * number;
}
 // Write a JavaScript function that takes two numbers as a
// arguments and returns the highest(max ) of the number using terinary operator inside a function
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// //Write a javascript function which takes three arguments 
// (amount , rate of interest, no of years ) returns the total value of interest
function calculateInterest(amount, rateOfInterest, numberOfYears) {
    return amount * rateOfInterest * numberOfYears / 100;
}