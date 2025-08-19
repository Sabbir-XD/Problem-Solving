// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

const vowels = "a, e, i, o, u";
function countTheVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // if(vowels.includes(str[i])){
    //   count++;
    // }
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

const massage = "programming";
const result = countTheVowels(massage);
console.log(result);
