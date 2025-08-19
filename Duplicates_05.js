// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

const numbers = [1, 2, 2, 3, 4, 4, 5, 5];

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       console.log(arr[j]);
  //       if (arr[i] === arr[j]) {
  //         arr.splice(j, 1);
  //         j--;
  //       }
  //     }
  //   }
  //   return arr;
}

const result = removeDuplicates(numbers);
console.log(result);
