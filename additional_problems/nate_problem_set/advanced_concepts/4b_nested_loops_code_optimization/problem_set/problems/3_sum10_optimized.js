// **********************************************************************
// sum10 (optimized)
//
// We previously solved sum10(array) while working with nested loops
// Nested loops are not optimal because we are scanning the entire string once for each character.
//
// Write a function that accepts an array of numbers.
// Return an array of sub arrays that contain all numbers that add up to 10.
// Notice that the results are not distictive pairs.
// Find the optimal solution by avoiding a nested for loop.
// 
//
// Examples :
//
// sum10([1, 6, 3, 7, 9]);
//   // => [[ 0, 4 ], [ 2, 3 ], [ 3, 2 ], [ 4, 0 ]]
// sum10([-4, 6, -7, 3, 11, 14, -1, 7, -22]); // => [[0, 5], [3, 7], [4, 6]]
//   // => [[ 0, 5 ], [ 3, 7 ], [ 4, 6 ], [ 5, 0 ], [ 6, 4 ], [ 7, 3 ]]
//
//
// Hints: 
//   There is only one possible match for a number that equals 10
//   Scan the numbers and record their indexes in an object
//   If the match exists in the object then use the index number of the match
// **********************************************************************

function sum10(array) {
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = sum10;

