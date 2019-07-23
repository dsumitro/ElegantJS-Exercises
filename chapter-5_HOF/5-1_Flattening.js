/*
Use the reduce method in combination with the concat method to “flatten” an array of arrays 
into a single array that has all the elements of the original arrays.
*/

const arrays = [[1, 2, 3], [4, 5], [6]];

// Solution
console.log(
  arrays.reduce((combinedArray, addedArray) => combinedArray.concat(addedArray))
);

// → [1, 2, 3, 4, 5, 6]
