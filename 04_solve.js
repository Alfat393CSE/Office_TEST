/* Problem: Write a function called countFrequency() that counts how many times each number appears in an array. 

Input: const numbers = [1, 2, 3, 2, 4, 1, 2, 5, 3]; 
Expected Output: { 1: 2, 2: 3, 3: 2, 4: 1, 5: 1 } 
*/

function countFrequency(numbers) {
  let frequency = {};

  for (let num of numbers) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  return frequency;
}


console.log(countFrequency([1, 2, 3, 2, 4, 1, 2, 5, 3]));