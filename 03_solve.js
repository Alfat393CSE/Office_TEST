/*
Problem: Write a function called removeDuplicates() that removes duplicate numbers from an array and returns a new array containing only unique values.

Input: const numbers = [10, 20, 10, 30, 40, 20, 50, 30]; 

Expected Output: [10, 20, 30, 40, 50] 
*/

function removeDuplicates(numbers) {
  let uniqueNumbers = [];

  for (let num of numbers) {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  }

  return uniqueNumbers;
}

console.log(removeDuplicates([10, 20, 10, 30, 40, 20, 50, 30]));
