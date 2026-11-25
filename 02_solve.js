/*
Problem:

Write a function that finds the second-largest unique number in an array without using .sort().

Example:
console.log(findSecondLargest([10, 5, 20, 8, 20, 15])); // 15
console.log(findSecondLargest([5, 5, 5])); // null

Output:
15

Rules:
- Don't use .sort().
- Don't remove duplicates manually.
- If there is no second-largest unique number, return null.
*/

function findSecondLargest(numbers) {
  let largest = Math.max(...numbers);

  let secondLargest = numbers.filter((num) => {
    return num !== largest;
  });

  if (secondLargest.length === 0) {
    return null;
  }

  return Math.max(...secondLargest);
}

console.log(findSecondLargest([10, 5, 20, 8, 20, 15])); // 15
console.log(findSecondLargest([5, 5, 5])); // null
