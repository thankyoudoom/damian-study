// **********************************************************************
// slidingSub10
//
// Write a function that accepts an array of numbers.
// Return an array of sub arrays that contain numbers that add up to 10.
// The numbers should be in sequential order.
//
// Examples :
//
// slidingSub10([1, 3, 5, 1, 4, 6, 2]); // => [[1, 3, 5, 1], [5, 1, 4], [4, 6]]
// slidingSub10([2, 10, 3, 5, 1, 4]); // => [[ 10 ], [ 5, 1, 4 ]]
// slidingSub10([-4, 3, 5, 6, -3, 6, 1]); // => [[ -4, 3, 5, 6 ], [ 6, -3, 6, 1 ]]
// **********************************************************************

function slidingSub10(arr) {
  var results = [];

  for (var i = 0; i < arr.length - 1; i += 1) {
    var cur = arr[i];
    var sub = [cur];
    var j = i;

    while (cur < 10) {
      j += 1;

      sub.push(arr[j]);
      cur += arr[j];
    }

    if (cur === 10) {
      results.push(sub);
    }
  }

  return results;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = slidingSub10;
