// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

const text = "madam";

function checkPalindrome(str) {
    return str === str.split("").reverse().join("");
}

const result = checkPalindrome(text);
console.log(result);