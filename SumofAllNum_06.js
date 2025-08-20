// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

const numbers = [1, 2, 3, 4];

function SumOfAllNumber(arr) {
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum = sum + arr[i];
  //   }
  //   return sum;

  return arr.reduce((total, num) => total + num, 0);
}

const result = SumOfAllNumber(numbers);
console.log(result);
