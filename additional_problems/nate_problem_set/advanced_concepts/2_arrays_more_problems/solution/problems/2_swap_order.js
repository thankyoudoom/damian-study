// **********************************************************************
// swapOrder
//
// You are given an array of numbers that are one swap away from being sorted.
// The numbers that are out of order will be adjacent to each other.
// Swap the numbers in place and return the original array with the numbers sorted.
// Swapping in place means you cannot use an additional data.
//
// [1, 3, 2] 
// swap 3 and 2 
// => [1, 2, 3]
//
// swapOrder([1, 3, 2]); // => [1, 2, 3]
// swapOrder([1, 4, 3, 5, 6, 8, 7, 9]); // => [1, 3, 4, 5, 6, 7, 8, 9]
// swapOrder([1, 1, 7, 4, 8]); // => [1, 1, 4, 7, 8]
// **********************************************************************

function swapOrder(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    var cur = arr[i];
    var next = arr[i + 1];

    if (cur > next) {
      arr[i] = next;
      arr[i + 1] = cur;
    }
  }

  return arr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = swapOrder;
