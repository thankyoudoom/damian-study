// **********************************************************************
// sum10 (optimized)
//
// We previously solved sum10(array) while working with nested loops
// Nested loops are not optimal because each time we search for a pair that sums 10 we have to scan the entire string
// The means we are performaing n^2 opperations (where n represents the number of numbers in the array)
//
// How can optimize this code by iterating through the string only twice?
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
// There is only one possible match for a number that equals 10
// Scan the numbers and record their indexes in an object
// If the match exists in the object then we need to know the index number of the match
// **********************************************************************

function sum10(array) {

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = sum10;