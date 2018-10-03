// **********************************************************************
// countChars
//
// Create a funtion that accepts a string of characters.
// It should return an object that holds the frequency counts of each character.
// Recurion should be used to build the object, loops are not permitted.
//
//
// Examples :
//
// countChars('mississippi'); // => { m: 1, i: 4, s: 4, p: 2 }
// countChars('sunny'); // => { s: 1, u: 1, n: 2, y: 1 }
//
//
// Hint : Use an outer function to hold variable state
//      : The inner function can be the recursive function
// **********************************************************************

// solution 1
function countChars(str) {
  var counts = {};
  var i = 0;

  function inner() {
    if (i >= str.length) {
      return;
    }

    var char = str[i];

    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }

    i += 1;
    inner();
  }

  inner();
  return counts;
}

// solution 2
function countChars(str, i=0, counts={}) {
  if (i === str.length) {
    return counts;
  }

  var cur = str[i];

  if (counts[cur]) {
    counts[cur] += 1;
  } else {
    counts[cur] = 1;
  }

  return countChars(str, i + 1, counts);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countChars;
