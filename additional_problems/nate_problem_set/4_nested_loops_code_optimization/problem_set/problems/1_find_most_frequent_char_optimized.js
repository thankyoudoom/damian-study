// **********************************************************************
// findMostFrequentChar (optimized)
//
// We previously solved findMostFrequentChar(str) while working with nested loops
// Nested loops are not optimal because we are scanning the entire string for each possible character
// The means we are performaing n^2 opperations (where n represents the number of characters in the string)
//
// How can optimize this code by iterating through the string only twice?
// This would me we are preforming n * 2 opperations, much better than n^2
//
//
// Examples :
//
// var str1 = 'afadfbac';
// console.log(findMostFrequentChar(str1)); // => 'a'

// var str2 = 'speak less than you know, know more than you show';
// console.log(findMostFrequentChar(str2)); // => 'o'
//
//
// Hints :
//   1. Iterate through the string and store the frequency count of each character in an object.
//   2. Iterate through the object and find the max character
//
// **********************************************************************

function findMostFrequentChar(str) {

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = findMostFrequentChar;
