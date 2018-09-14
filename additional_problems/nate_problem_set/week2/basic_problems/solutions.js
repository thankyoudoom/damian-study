// ********************************
// *****   Problems Week 2    *****
// ********************************


// basic      (24 problems)


// **********************************************************************
// basic problems

//   getValue
//   getFriends
//   printKeys
//   printValues
//   printKeyValues
//   getKeysArray
//   getValues
//   hasTargetValue
//   countVowelsObj
//   getValueAtIndexes
//   printNums
//   printNumsDistinctive
//   print2dValues
//   getCoordinates
//   getMaxValue
//   print2dReverse
//   countVowels
//   getMaxMin
//   uppercaseWords
//   hasTargetWord
//   hasTargetWordPunc
//   hasAllTargetWords
//   removeVowels
//   removeLastVowel


// **********************************************************************
// Write a function that accepts an object and a key as an argument.
// The function should look up the key in the object and return the value.
//
// Examples :
//
// getValue(user, 'name') // => 'Jane'
// getValue(user, 'email') // => 'jane@mail.com'
// getValue(user, 'address') // => '1233 walnut drive'
// **********************************************************************

function getValue(obj, key) {
  return obj[key];
}

var user = {
  name : 'Jane',
  email : 'jane@mail.com',
  address : '1233 walnut drive',
}


// **********************************************************************
// Write a function that accepts an user object as an argument.
// The function should return the users friends array.
//
// Examples :
//
// var user = {
//   name : 'Jane',
//   email : 'jane@mail.com',
//   address : '1233 walnut drive',
//   friends : ['tad', 'mel', 'chris']
// }
//
// getFriends(user) // => ['tad', 'mel', 'chris']
// **********************************************************************

function getFriends(obj) {
  return obj.friends;
}

// **********************************************************************
// Write a function that accepts an object.
// The function should print all keys in object
//
// Example :
//   var user = {
//     name : 'Jane',
//     email : 'jane@mail.com',
//     address : '1233 walnut drive',
//   }
//
// printKeys(user) // => prints : 'name', 'email', 'address'
// **********************************************************************

function printKeys(obj) {
  for (var key in obj) {
    console.log(key); 
  }
}


// **********************************************************************
// Write a function that accepts an object.
// The function should print all value in object
//
// Example :
//
// var user = {
//   name : 'Jane',
//   email : 'jane@mail.com',
//   address : '1233 walnut drive',
// }
//
// printValues(user) // => prints : 'Jane', 'jane@mail.com', '1233 walnut drive'
// **********************************************************************

function printValues(obj) {
  for (var key in obj) {
    console.log(obj[key]); 
  }
}


// **********************************************************************
// Write a function that accepts an object.
// The function should print all keys + ' is ' + value.
//
// Example :
//
// var user = {
//   name : 'Jane',
//   email : 'jane@mail.com',
//   address : '1233 walnut drive',
// }

// printKeyValues(user) 
//   => prints : 
//     'name is Jane'
//     'email is jane@mail.com'
//     'address is 1233 walnut drive'
// **********************************************************************

function printKeyValues(obj) {
  for (var key in obj) {
    console.log(key + ' is ' + obj[key]); 
  }
}



// **********************************************************************
// Write a function that accepts an object.
// The function should push all the values to an array and return the array
//
// Example :
//
// var user = {
//   name : 'Jane',
//   email : 'jane@mail.com',
//   address : '1233 walnut drive',
// }

// getKeysArray(user) // => ['name', 'email', 'address'] 
// **********************************************************************

function getKeysArray(obj) {
  var results = [];

  for (var key in obj) {
    results.push(key);
  }

  return results;
}


// **********************************************************************
// Write a function that accepts an object as an argument.
// The function should return an array of all the values without a using iteration.
//
// Example :
//
// var user = {
//   name : 'Jane',
//   email : 'jane@mail.com',
//   address : '1233 walnut drive',
// }
//
// getValues(user) // => ['Jane', 'jane@mail.com', '1233 walnut drive'] 
// **********************************************************************

function getValues(obj) {
  return Object.values(obj);
}

  
// **********************************************************************
// Write a function that accepts an object as an argument.
// The function should return the number of all values that contain a number.
// All values will be in string format
//
// Example :
//
// var user = {
//   name : 'Jane',
//   email : 'jane@mail.com',
//   address : '1233 walnut drive',
//   age : '44'
// }
//
// countValuesWithNumbers(user) // => 2 
// **********************************************************************

function countValuesWithNumbers(obj) {
  var count = 0;
  var nums = '0123456789';

  for (var key in obj) {
    var val = obj[key];

    if (nums.indexOf(val) > -1) {
      count += 1;
    }
  }

  return count
}


// **********************************************************************
// Write a function that accepts an object and target as arguments
// The function should return true if the object holds the target as a value, false otherwise
//
// Examples :
//
// var user = {
//   name : 'Jane',
//   email : 'jane@mail.com',
//   address : '1233 walnut drive',
// }

// hasTargetValue(user, 'Jane') // => true
// hasTargetValue(user, 'jane@mail.com') // => true
// hasTargetValue(user, 'Jake') // => flase
// **********************************************************************

function hasTargetValue(obj, target) {
  var values = Object.values(obj);

  return values.indexOf(target) > -1;
}

  
// **********************************************************************
// Write a function that accepts a string of vowels and a counts object as arguments.
// The counts object holds all vowels as values, and all keys set to 0.
// The function should return an object of all the vowel counts from the string.
//
// Example :
//
// var counts = {
//   o : 0,
//   a : 0,
//   e : 0,
//   u : 0,
//   i : 0
// }
//
// countVowelsObj('aaeeiiiiouuu', counts);
//   => {
//     o : 1,
//     a : 2,
//     e : 2,
//     u : 3,
//     i : 4
//   }
// **********************************************************************

function countVowelsObj(str, counts) {
  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    counts[cur] += 1;
  }

  return counts;
}


// **********************************************************************
// Write a function that accepts a 2d array as an agrument and a vertical and horizontal indexes.
// The function should return value found that the indexs
//
// Examples :
//
// var array2d = [
//   [1, 0, 4],
//   [7, 6, 5],
//   [2, 8, 9]
// ]

// getValueAtIndexes(array2d, 1, 2); // => 5;
// getValueAtIndexes(array2d, 2, 0); // => 2;
// getValueAtIndexes(array2d, 0, 1); // => 0;
// **********************************************************************

function getValueAtIndexes(array2d, h, v) {
  return array2d[h][v];
}


// **********************************************************************
// Write a function that prints the following numbers
// prints :  1 1 
//           1 2 
//           1 3 
//           2 1 
//           2 2 
//           2 3
//           3 1 
//           3 2 
//           3 3
// **********************************************************************
function printNums() {
  for (var i = 1; i <= 3; i += 1) {
    for (var j = 1; j <= 3; j += 1) {
      console.log(i, j); 
    }
  }
}

// **********************************************************************
// Write a function that prints the following numbers
// print : 0 1 
//         0 2 
//         0 3 
//         0 4 
//         1 2 
//         1 3 
//         1 4
//         2 3 
//         2 4
//         2 4
// **********************************************************************

function printNumsDistinctive() {
  for (var i = 0; i <= 2; i += 1) {
    for (var j = i + 1; j <= 4; j += 1) {
      console.log(i, j); 
    }
  }
}


// **********************************************************************
// Write a function that accepts a 2d array as an argument
// The function should print all of the values in the 2d array
//
// Example :
//
// var array2d = [
//   [1, 0, 4],
//   [7, 6, 5],
//   [2, 8, 9]
// ]
//
// print2dValues(array2d) // => prints : 1, 0, 4, 7, 6, 5, 2, 8, 9
// **********************************************************************

function print2dValues(array2d) {
  for (var i = 0; i < array2d.length; i += 1) {
    var sub = array2d[i]

    for (var j = 0; j < sub.length; j += 1) {
      var val = sub[j];

      console.log(val); 
    }
  }
}


// **********************************************************************
// Write a function that accepts a 2d array and a target value.
// The function should return the coordinates where the target occurs in the 2d array.
// If the target does not exist return -1.
// There will be no repeat values in the 2d array.
//
// Examples :
//
// var array2d = [
//   [1, 0, 4],
//   [7, 6, 5],
//   [2, 8, 9]
// ]
//
// getCoordinates(array2d, 8) // => [2, 1]
// getCoordinates(array2d, 1) // => [0, 0]
// getCoordinates(array2d, 4) // => [0, 2]
// getCoordinates(array2d, 3) // => -1
// **********************************************************************

function getCoordinates(array2d, target) {
  for (var i = 0; i < array2d.length; i += 1) {
    var sub = array2d[i];

    for (var j = 0; j < sub.length; j += 1) {
      var cur = array2d[i][j];

      if (cur === target) {
        return [i, j];
      }
    }
  }

  return -1;
}


// **********************************************************************
// Write a function that accepts a 2d array as an argument.
// The function should return the max value found in the 2d array.
//
// Example :
//
// var array2d = [
//   [1, 0, 4],
//   [7, 6, 5],
//   [2, 8, 9]
// ]
//
// getMaxValue(array2d) => 9;
// **********************************************************************

function getMaxValue(array2d) {
  var max = 0;

  for (var i = 0; i < array2d.length; i += 1) {
    var sub = array2d[i];

    for (var j = 0; j < sub.length; j += 1) {
      var cur = array2d[i][j];

      if (cur > max) {
        max = cur;
      }
    }
  }

  return max;
}


// **********************************************************************
// Write a function that accpets a 2d array as an argument.
// The function should print all of the values in the 2d array in reverse.
//
// Example :
//
// var array2d = [
//   [1, 0, 4],
//   [7, 6, 5],
//   [2, 8, 9]
// ]
//
// print2dReverse(array2d) // prints : 9, 8, 2, 5, 6, 7, 4, 0, 1 
// **********************************************************************

function print2dReverse(array2d) {
  for (var i = array2d.length - 1; i >= 0; i -= 1) {
    var sub = array2d[i];

    for (var j = sub.length - 1; j >= 0; j -= 1) {
      var cur = array2d[i][j];

      console.log(cur); 
    }
  }
}


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return the count of vowels in the string.
//
// Example :
//
// countVowels('mississippi') // => 4
// countVowels('hello') // => 2
// countVowels('spectacular') // => 4
// **********************************************************************

function countVowels(str) {
  var vowels = 'aeiou';
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
// Write a function that accepts an array of numbers as an argument.
// The function should return the maximum number and minimum number found in the array.
// There will be no repeated or negative numbers.
//
// Examples :
//
// getMaxMin([3, 7, 6, 2, 4]) // => [2, 7]
// getMaxMin([1, 7, 6, 2, 9]) // => [1, 9]
// **********************************************************************

function getMaxMin(arr) {
  var min = null;
  var max = null;

  for (var i = 0; i < arr.length; i += 1) {
    var cur = arr[i];

    if (min === null || cur < min) {
      min = cur;
    }

    if (max === null || cur > max) {
      max = cur;
    }
  }

  return [min, max];
}


// **********************************************************************
// Write a function that accepts an string of words.
// The function should return a new string with all of the words capitalized.
//
// Examples :
//
// uppercaseWords('Today is a good day') // => 'Today Is A Good Day'
// uppercaseWords('I like to code') // => 'I Like To Code'
// **********************************************************************

function uppercaseWords(str) {
  var words = str.split(' ');
  var results = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    var firstChar = word[0].toUpperCase();
    var rest = word.slice(1);

    results.push(firstChar + rest);
  }

  return results.join(' ');
}


// **********************************************************************
// Write a function that accepts an array of words and a target word.
// Each word ends in an 'x', the target word does not
// The function should return true if the target word exists in the array, false otherwise
// Ignore the 'x'.
//
// Examples :
//
// hasTargetWord(['todayx', 'isx', 'ax', 'goodx', 'dayx'], 'good'); // => true
// hasTargetWord(['todayx', 'isx', 'ax', 'goodx', 'dayx'], 'bad'); // => false
// **********************************************************************

function hasTargetWord(arr, target) {
  return arr.indexOf(target + 'x') > -1;
}


// **********************************************************************
// Write a function that accepts an array of words and a target word.
// Each word ends in an punctuation mark, the target word does not
// The function should return true if the target word exists in the array, false otherwise
// Ignore the punctuation mark.
//
// Examples :
//
// hasTargetWordPunc(['today,', 'is.', 'a!', 'good;', 'day:'], 'good'); // => true
// hasTargetWordPunc(['today,', 'is.', 'a!', 'good;', 'day:'], 'bad'); // => false
// **********************************************************************

function hasTargetWordPunc(arr, target) {
  for (var i = 0; i < arr.length; i += 1) {
    var cur = arr[i].slice(0, -1);

    if (cur === target) {
      return true;
    }
  }

  return false;
}

// **********************************************************************
// Write a function that accepts an array of words and an array of target words as arguments.
// The function should return true if all target words exist in the first words array, false otherwise.
//
// Examples :
//
// hasAllTargetWords(['the', 'cat', 'runs', 'home'], ['cat', 'runs']) // => true;
// hasAllTargetWords(['the', 'cat', 'runs', 'home'], ['boy', 'runs']) // => false;
// **********************************************************************

function hasAllTargetWords(words, targets) {
  for (var i = 0; i < targets.length; i += 1) {
    var cur = targets[i];

    if (words.indexOf(cur) === -1) {
      return false;
    }
  }

  return true;
}


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return a new string will all of the vowels removed.
//
// Examples :
//
// removeVowels('mississippi') // => 'msssspp';
// removeVowels('happy') // => 'hppy';
// removeVowels('cry') // => 'cry';
// **********************************************************************

function removeVowels(str) {
  var vowels = 'aeiou';
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (vowels.indexOf(cur) === -1) {
      newStr += cur;
    }
  }

  return newStr;
}

