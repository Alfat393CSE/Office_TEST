/* Problem:

Write a function called findCommon() that finds the numbers that exist in both arrays.

Input:
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7, 8, 9];

Expected Output:
[3, 4, 5]

Hint: You can use:
- for...of
- includes()
- push()

*/

function findCommon(arr1, arr2) {
  let result = [];

  for (let num of arr1) {
    if (arr2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(findCommon([1, 2, 3, 4, 5, 6], [3, 4, 5, 7, 8, 9]));