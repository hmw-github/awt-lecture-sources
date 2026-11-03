const numbers = [1, 2, 3, 4];
// Destructuring array elements into variables
const [first, second, third] = numbers;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3
 
// Skipping the second element
const [first2, , third2] = numbers;
console.log(first2);  // Output: 1
console.log(third2);  // Output: 3
 
// Using the rest parameter to capture remaining elements
const [first3, ...rest] = numbers;
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4, 5]
