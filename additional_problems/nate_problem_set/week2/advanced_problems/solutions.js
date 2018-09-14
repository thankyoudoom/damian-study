// ********************************
// *****   Problems Week 2    *****
// ********************************


// advanced   (12 problems)


// **********************************************************************
// advanced problems

//   upperFriends
//   countKeyValuePairs
//   ageAverage
//   countVowelsInValues
//   getCountsArr
//   getCountEntries
//   getMaxPrice
//   getMaxBrandPrice
//   allEvens
//   getDiagonalElements
//   getPerimeterElements
//   replaceMaxElement


// **********************************************************************
// Write a function that accepts an user object.
// The user object has a friends key with an array of friend names as the value.
// The function should return the friends array with each friend name capitalized.
// Can you modify the friends array in place?
//
// Example :
//
// var user = {
//   name : 'Maddie',
//   friends : ['mark', 'missy', 'tom']
// }
//
// upperFriends(user); // => ['Mark', 'Missy', 'Tom']
// **********************************************************************

function upperFriends(obj) {
  var friends = obj.friends;

  for (var i = 0; i < friends.length; i += 1) {
    var friend = friends[i];
    var first = friend[0].toUpperCase();
    var rest = friend.slice(1);

    friends[i] = first + rest;
  }

  return obj.friends;
}


// **********************************************************************
// Write a function that accepts an object as an argument.
// The function should return the number of key value pairs in the object.
// Do this without using .length
//
// Example :
//
// var user = {
//   name : 'Maddie',
//   friends : ['mark', 'missy', 'tom'],
//   email : maddie@mail.com
// }
//
// countKeyValuePairs(user) // => 3
// **********************************************************************

function countKeyValuePairs(obj) {
  var count = 0;

  for (var key in obj) {
    count += 1;
  }

  return count;
}

// **********************************************************************
// Write a function that accepts an students object as an argument.
// The object holds a student name as the key and a number representing their age.
// The function should return the average age of all students in the class.
//
// Example :
//
// var students = {
//   Maddie : 22,
//   Mark : 33,
//   Missy : 44,
//   Tom : 55
// }
//
// ageAverage(students); // => 38.5
// **********************************************************************

function ageAverage(obj) {
  var total = 0;

  for (var key in obj) {
    var val = obj[key];

    total += val;
  }

  var objLength = Object.keys(obj).length;
  return total / objLength
}

// **********************************************************************
// Write a function that accepts an object as an argument.
// The keys of the object represent a student, the value represents the students best friend.
// Write a function that returns the total number of vowels that exists in the best friend values.
//
// var students1 = {
//   Alice : 'Missy',
//   Missy : 'Tom',
// }

// var students2 = {
//   Alice : 'Missy',
//   Mark : 'Tom',
//   Missy : 'Tom',
//   Tom : 'Alice',
// }
//
// countVowelsInValues(students1); // => 2
// countVowelsInValues(students2); // => 6
// **********************************************************************

function countVowelsInValues(obj) {
  var count = 0;

  for (var key in obj) {
    var val = obj[key];

    count += getVowelCount(val);
  }

  return count;
}

function getVowelCount(str) {
  var vowels = 'AEIOUaeiou';
  var count = 0;

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (vowels.indexOf(cur) > -1) {
      count += 1;
    }
  }

  return count;
}


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return an array of sub arrays representing the freqency counts of the element in the sting.
// A sub array holds the character at index 0 and the count at index 1.
// Ignore all spaces.
// Avoid using Object.entries() in your solution.
//
// Example :
//
// getCountsArr('go dog go'); // => [['g', 3], ['o', 3], ['d', 1]]
// getCountsArr('mississippi'); // => [['m', 1], ['i', 4], ['s', 4], ['p', 2]]
// **********************************************************************

function getCountsArr(str) {
  var results = [];

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];
   
    if (cur !== ' ') {
      results = addToResults(cur, results);
    }
  }

  return results;
}

function addToResults(ele, results) {
  var subFount = false;

  for (var i = 0; i < results.length; i += 1) {
    var sub = results[i];

    if (sub[0] === ele) {
      sub[1] += 1;
      subFount = true;
    }
  }

  if (subFount === false) {
    results.push([ele, 1]);
  }

  return results;
}

// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return an array of sub arrays representing the freqency counts of the element in the sting.
// A sub array holds the character at index 0 and the count at index 1.
// Ignore all spaces.
// You are allowed to use Object.entries() in your solution
//
// Example :
//
// getCountEntries('go dog go'); // => [['g', 3], ['o', 3], ['d', 1]]
// getCountEntries('mississippi'); // => [['m', 1], ['i', 4], ['s', 4], ['p', 2]]
// **********************************************************************

function getCountEntries(str) {
  var counts = getCounts(str);

  return Object.entries(counts);
}

function getCounts(str) {
  var counts = {};

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (counts[cur] === undefined) {
      counts[cur] = 1;
    } else {
      counts[cur] += 1;
    }
  }

  return counts;
}

// **********************************************************************
// Write a function that accepts a cars object as an argument.
// The object keys represent car brands and the object values represent the car prices.
// The function should return the car brand with the highest price in the object.
//
// Example :
//
// var cars = {
//   acura : 12000,
//   mazda : 18000,
//   bmw : 9000,
//   chevy : 11000
// }
//
// getMaxPrice(cars); // => 'mozda'
// **********************************************************************

function getMaxPrice(obj) {
  var max = 0;
  var brand = null;

  for (var key in obj) {
    var val = obj[key];

    if (val > max) {
      max = val;
      brand = key;
    }
  }

  return brand;
}


// **********************************************************************
// Write a function that accepts a cars object as an argument.
// The object keys represent car brands and the object values represent the car prices.
// The function should return an array with the max brand and the max price.
// Note : the car values are strings not numbers
//
// Example :
//
// var cars = {
//   acura : '$12,000',
//   mazda : '$18,000',
//   bmw : '$9000',
//   chevy : '$11,000'
// }
//
// getMaxBrandPrice(cars); // => ['mazda', '$18,000']
// **********************************************************************

function getMaxBrandPrice(obj) {
  var maxNumberPrice = null;
  var maxStringPrice = null;
  var maxBrand = null;

  for (var key in obj) {
    var curStrPrice = obj[key];
    var curNumberPrice = getNumberPrice(curStrPrice);

    if (maxStringPrice === null || curNumberPrice > maxNumberPrice) {
      maxNumberPrice = curNumberPrice;
      maxStringPrice = curStrPrice;
      maxBrand = key;
    }
  }

  return [maxBrand, maxStringPrice];
}

function getNumberPrice(str) {
  var newStr = '';
  var nums = '0123456789';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (nums.indexOf(cur) > -1) {
      newStr += cur;
    }
  }

  return Number(newStr);
}

// **********************************************************************
// Write a function that accepts an array of sub arrays representing a 2d pain as an argument.
// The function should a 2d plane holding all even numbers.
// If a number is odd add 1 to the number to make it even.
// All elements in the 2d plane will be positive numbers.
//
// Example :
//
// var array2d = [
//   [3, 5, 4],
//   [1, 2, 5],
//   [2, 6, 3],
// ]
//
// allEvens(array2d); 
//   => [
//        [4, 6, 4],
//        [2, 2, 6],
//        [2, 6, 4],
//      ]
// **********************************************************************

function allEvens(array2d) {
  for (var i = 0; i < array2d.length; i += 1) {
    var sub = array2d[i];

    for (var j = 0; j < sub.length; j += 1) {
      var cur = sub[j];

      if (cur % 2 === 1) {
        sub[j] = cur + 1;
      }
    }
  }

  return array2d;
}


// **********************************************************************
// Write a function that accepts a 2d plane as an argument.
// The function should return an array all of the diagonal elements.
// The plane will be symmetrical
//
// Example : 
//
// var array2d = [
//   [1, 5, 3, 4],
//   [3, 3, 1, 8],
//   [6, 4, 9, 4],
//   [9, 7, 3, 4],
// ]
//
// getDiagonalElements(array2d); // => [1, 3, 9, 4]
// **********************************************************************

function getDiagonalElements(arr) {
  var results = [];
  var j = 0;
  var i = 0;

  while (results.length < arr.length) {
    results.push(arr[i][j]);

    j += 1;
    i += 1;
  }

  return results;
}

// **********************************************************************
// Write a function that accepts a 2d plane as an argument.
// The function should return an array all of the perimeter elements.
// The plane will be symmetrical
//
// Example : 
//
// var array2d1 = [
//   [1, 5, 3],
//   [3, 3, 1],
//   [6, 4, 9]
// ]

// var array2d2 = [
//   [1, 5, 3, 4],
//   [3, 3, 1, 9],
//   [6, 4, 9, 1],
//   [8, 3, 1, 2]
// ]

// getPerimeterElements(array2d1); // => [1, 5, 3, 1, 9, 4, 6, 3]
// getPerimeterElements(array2d2); // => [1, 5, 3, 4, 9, 1, 2, 1, 3, 8, 6, 3]
// **********************************************************************

function getPerimeterElements(arr) {
  var results = [];

  var i = 0;
  var j = 0;

  while (j < arr.length) {
    results.push(arr[i][j]);

    j += 1;
  }

  j -= 1;
  i += 1;

  while (i < arr.length) {
    results.push(arr[i][j]);

    i += 1;
  }

  i -= 1;
  j -= 1;

  while (j >= 0) {
    results.push(arr[i][j]);

    j -= 1;
  }

  i -= 1;
  j += 1;

  while (i > 0) {
    results.push(arr[i][j]);

    i -= 1;
  }

  return results;
}


// **********************************************************************
// Write a function taht accepts a 2d plane as an argument.
// The function should return a 2d plane with the max element replaced with a 'x'.
// All elements in the plane will be numbers and the largest element will be unique.
//
// Example :
//
// var array2d1 = [
//   [1, 3, 2],
//   [7, 5, 4],
//   [6, 8, 0]
// ]
//
// var array2d2 = [
//   [1, 5, 3, 4],
//   [3, 3, 1, 0],
//   [6, 4, 9, 1],
//   [8, 3, 1, 2]
// ]
//
// replaceMaxElement(array2d1); 
//   => [
//     [1, 3, 2],
//     [7, 5, 4],
//     [6, 'x', 0]
//   ]
//
// replaceMaxElement(array2d2); 
//   => [ 
//     [1, 5, 3, 4],
//     [3, 3, 1, 0],
//     [6, 4, 'x', 1],
//     [8, 3, 1, 2] 
//   ]
// **********************************************************************

function replaceMaxElement(arr) {
  var maxVal = getMaxVal(arr);

  for (var i = 0; i < arr.length; i += 1) {
    var sub = arr[i];

    for (var j = 0; j < sub.length; j += 1) {
      var cur = arr[i][j];

      if (cur === maxVal) {
        arr[i][j] = 'x';
      }
    }
  }

  return arr;
}

function getMaxVal(arr) {
  var max = null;

  for (var i = 0; i < arr.length; i += 1) {
    var sub = arr[i];

    for (var j = 0; j < sub.length; j += 1) {
      var cur = arr[i][j];

      if (max === null || cur > max) {
        max = cur;
      }
    }
  }

  return max;
}

// **********************************************************************
