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
// **********************************************************************

// solution 1
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

// solution 2
function removeOdds(arr, i=0, res=[]) {
  if (!arr.length) {
    return res;
  }

  var cur = arr.shift();
  
  if (cur % 2 === 0) {
    res.push(cur);
  }

  return removeOdds(arr, i + 1, res);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = removeOdds;
