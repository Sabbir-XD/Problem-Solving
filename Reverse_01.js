// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

const text = "hello";
function reverseString(str){
  return str.split("").reverse().join("");
}

const result = reverseString(text);
console.log(result);