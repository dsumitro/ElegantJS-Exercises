/*
Implement every as a function that takes an array and a predicate function as parameters. 

Write two versions, one using a loop and one using the some method.
*/

function everyLoop(array, test) {
  for (const element of array) {
    if (!test(element)) {
      return false;
    }
    // I had return true here but not sure why the tests resulted in true,true, undef
  }
  return true;
}

function everySome(array, test) {
  return !array.some(element => !test(element));
}

console.log('Loop');
console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
console.log('Some');
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true
