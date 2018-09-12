// **********************************************************************
// sum10Distinctive (optimized)
//
// In the previous problem we found all number combinations that sum 10.
// We used an object lookup table to optimize performance.
// However the result were not distinctive
//
// sum10Distinctive([1, 6, 3, 7, 9]);  // => [[ 0, 4 ], [ 2, 3 ], [ 3, 2 ], [ 4, 0 ]]
// [0, 4] and [4, 0] both appear in the results array
//
//
// Modify the previous optimized solution to only include distinctive sub arrays.
//
//
// sum10Distinctive([1, 6, 3, 7, 9]); // => [[0, 4], [2, 3]]
// sum10Distinctive([-4, 6, -7, 3, 11, 14, -1, 7, -22]); // => [[0, 5], [3, 7], [4, 6]]
// **********************************************************************

function sum10Distinctive(array) {
  var counts = getCounts(array);
  var results = [];

  for (var i = 0; i < array.length; i += 1) {
    var cur = array[i];
    var match = 10 - cur;

    if (counts[match] !== undefined) {
      results.push([i, counts[match]]); 

      delete counts[cur];
    }
  }

  return results;
}

function getCounts(array) {
  var counts = {};

  for (var i = 0; i < array.length; i += 1) {
    var val = array[i];

    counts[val] = i;
  }

  return counts;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = sum10Distinctive;
