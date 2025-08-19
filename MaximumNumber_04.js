// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

const numbers = [5, 1, 9, 3];

function FindLargestNumber(arr) {
  return Math.max(...arr);
  //   let largest = arr[0];
  //  for(const num of arr) {
  //    if(num > largest) {
  //      largest = num;
  //    }
  //  }
  //  return largest;
}

const result = FindLargestNumber(numbers);
console.log(result);
