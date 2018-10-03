// **********************************************************************
// validCountStr (optimized)
//
// We previously solved validCountStr(str, sub) while working with nested loops.
// Nested loops are not optimal because we are scanning the entire string once for each character.
//
// Write a function that accepts a string and a countStr.
// The countStr contains characters followed by the number of times the character should appear in the string.
// Find the optimal solution by avoiding a nested for loop.
//
// If the countStr is 't1o3g1', and the string is 'today is a good day'
// 't' should appear 1 time (true)
// 'o' should appear 3 times (true)
// 'g' should appear 1 time (true)
//
// The function should return true if all the characters and counts in the count string are valid, flase otherwise.
//
// Examples :
//
// validCountStr('today is a good day', 't1o3g1'); // => true
// validCountStr('today is a good day', 't1o3g2'); // => false
// validCountStr('today is a good day', ''); // => true
//
// Hints :
//   1. Iterate through the string and store the frequency count of each character in an object.
//   2. Iterate through the object to determine if the counts are correct.
// **********************************************************************

function validCountStr(str, sub) {
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = validCountStr;

