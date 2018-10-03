// **********************************************************************
// findMostFrequentChar (optimized)
//
// We previously solved findMostFrequentChar(str) while working with nested loops
// Nested loops are not optimal because we are scanning the entire string once for each character.
//
// Write a function that accepts a string and returns the most commonly occuring character.
// There will not be any ties. 
// Find the optimal solution by avoiding a nested for loop.
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
  var counts = getCounts(str);
  var maxChar = '';
  var maxCount = 0;

  for (var key in counts) {
    var val = counts[key];

    if (key !== ' ' && val > maxCount) {
      maxChar = key;
      maxCount = val;
    }
  }

  return maxChar;
}

function getCounts(str) {
  var counts = {};

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (counts[cur]) {
      counts[cur] += 1;
    } else {
      counts[cur] = 1;
    }
  }

  return counts;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = findMostFrequentChar;
