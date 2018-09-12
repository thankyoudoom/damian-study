// ********************************************************************** 
// swapSort (Medium)

// You are given an array of numbers.
// Return the same array with the numbers in order.
// You are not allowed to create an additional data structure.
// You are only allowed to swap values in the original array
//
//   var arr = [1, 5, 3];
//   arr[1] = 3;
//   arr[2] = 5;
//   arr => [1, 3, 5]
//
// Examples:
//  swapSort([5, 9, 4, 7, 2]); // => [2, 4, 5, 7, 9]
//  swapSort([-5, -9, -4, -7, -2]); // => [-9, -7, -5, -4, -2]
//  swapSort([-50, 50, -25, 25, 0]); // => [-50, -25, 0, 25, 50]
// ********************************************************************** 


function swapSort(arr) {
  while (true) {
    var i = 0;
    var shifted = false;

    while (i < arr.length) {
      var cur = arr[i];
      var next = arr[i + 1];

      if (cur > next) {
        arr[i] = next;
        arr[i + 1] = cur;

        shifted = true;
      }

      i += 1;
    }

    if (shifted === false) {
      return arr;
    }
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = swapSort;
