// **********************************************************************
// largestSumOfK
//
// Write a function that accepts an array of numbers and a number (k).
// Find the max sum of k elements in sequential order.
//
// [4, 6, 1, 8, 7, 2, 11]
//
// k = 2
//   max [8, 7]
//   => 15
//
// k = 3
//   max [7, 2, 11]
//   => 20
//
//
// Examples :
//
// largestSumOfK([4, 6, 1, 8, 7, 2, 11], 2); // =>  15
// largestSumOfK([4, 6, 1, 8, 7, 2, 11], 3); // =>  20
// largestSumOfK([4, 6, 1, 8, 7, 2, 11], 6); // =>  35
// largestSumOfK([4, 6, 1, 8, 7, 2, 11], 7); // =>  39
// largestSumOfK([-4, -6, -1, -8, -7, -2, -11], 3); =>  // -11
// largestSumOfK([], 3); // =>  null
// **********************************************************************

function largestSumOfK(arr, k) {
  var maxSum = null;

  for (var i = 0; i < arr.length - (k - 1); i += 1) {
    var windowNums = arr.slice(i, i + k);
    var curSum = getSum(windowNums);

    if (maxSum === null || curSum > maxSum) {
      maxSum = curSum;
    }
  }

  return maxSum;
}

function getSum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = largestSumOfK;
