// **********************************************************************
// removeOdds
//
// Create a funtion that accepts an array of numbers.
// It should return a array with all the odd numbers removed.
// Recurion should be used to build the arr, loops are not permitted.
//
//
// Examples :
//
// removeOdds([4, 3, 7, 6, 8, 5]); // => [4, 6, 8]
// removeOdds([10, 4, 12, 5, 3, 6, 7, 8]); // => [10, 4, 12, 6, 8]
//
//
// Hint : Use an outer function to hold variable state
//      : The inner function can be the recursive function
// **********************************************************************

function removeOdds(arr) {
  var results = [];
  i = 0;

  function inner() {
    if (i > arr.length) {
      return;
    }

    if (arr[i] % 2 === 0) {
      results.push(arr[i]);
    }

    i += 1;
    inner();
  }

  inner();
  return results;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = removeOdds;
