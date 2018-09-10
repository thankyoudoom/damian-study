// **********************************************************************
// sumPointers
//
// Write a function that accepts an array of numbers.
// Numbers from the array should be added together in groups of two, and returned in a new array.
// The length of the array will always be even.
//
// If given [1, 2, 3, 4, 5, 6]
//   1 + 3 = 3
//   3 + 4 = 7
//   5 + 6 = 11
// return [3, 7, 11]
//
//
// Examples :
//
// sumPointers([1, 2, 3, 4, 5, 6]); // => [3, 7, 11]
// sumPointers([2, 5, 6, 4, 3, 2, 3, 4, 9, 3]); // => [7, 10, 5, 7, 12]
// sumPointers([]); // => []
//
// **********************************************************************


function sumPointers(arr) {
  var sums = [];

  for (var i = 0; i < arr.length - 1; i += 2) {
    var cur = arr[i];
    var next = arr[i + 1];

    sums.push(cur + next);
  }

  return sums;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = sumPointers;
