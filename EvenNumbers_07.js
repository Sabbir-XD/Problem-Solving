// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const num = [1, 2, 3, 4, 5, 6];

function findEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
}

const result = findEvenNumbers(num);
console.log(result);
