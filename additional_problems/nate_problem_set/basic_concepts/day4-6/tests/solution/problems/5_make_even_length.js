// ********************************************************************** 
// makeEvenLength
//
// Write a function that accepts an array as an argument.
// If the array holds an odd number of elements, add another number to the array.
// The new number should be the last value in the array plus 1.
// Return the even length array.
// ********************************************************************** 

function makeEvenLength(arr) {
  if (arr.length % 2 === 0) {
    return arr;
  }

  var last = arr[arr.length - 1];
  arr.push(last + 1);

  return arr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = makeEvenLength;
