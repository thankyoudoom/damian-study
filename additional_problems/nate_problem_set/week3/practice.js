// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return an array of numbers that represent a peaks.
//
// A peak is when an number is larger than the number before it and after it.
// [1, 3, 1] (3 is a peak)
//
// if there is no previous number, the current number needs to be larget than the next number.
// [3, 1] (3 is a peak)
//
// if there is no next number, the current number needs to be larget than the previous number.
// [3, 9] (9 is a peak)
//
// Try solving this with a for loop and using the built in 'filter' method.
// All arrays will be at least 2 in length
// 
// Example : 
console.log(filterPeakFinder([1, 2, 1, 3, 5, 2])); // => [2, 5]
console.log(filterPeakFinder([5, 4, 3, 6, 5])); // => [5, 6]
console.log(filterPeakFinder([1, 2, 3, 4])); // => [4]
console.log(filterPeakFinder([4, 3, 2, 1])); // => [4]
// **********************************************************************

function filterPeakFinder(arr) {
  var peaks = [];

  for (var i = 0; i < arr.length; i += 1) {
    var prev = arr[i - 1];
    var cur = arr[i];
    var next = arr[i + 1];

    if (!prev && cur > next) {
      peaks.push(cur);
    } else if (!next && cur > prev) {
      peaks.push(cur);
    } else if (cur > prev && cur > next) {
      peaks.push(cur);
    }
  }

  return peaks;
}
