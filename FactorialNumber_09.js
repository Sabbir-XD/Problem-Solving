// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

const num = 5;
function findFactorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
        console.log(fact);
    }
    return fact;
}

const result = findFactorial(num);
console.log(result);