// ********************************
// *****   Problems Week 2    *****
// ********************************


// basic      (24 problems)
// actual     (43 problems)
// advanced   (12 problems)


// **********************************************************************
// basic

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
// actual

//   average                 
//   tripler                 
//   oddRange                
//   evenRange              
//   reverseString           
//   intersect                    
//   fuzzBizz                    
//   arrayRange              
//   reverseOddRange         
//   isSquare                
//   mysticNumbers           
//   firstOrLast                
//   diffArrayLen            
//   mirrorArray             
//   avgValue                
//   abbreviate                
//   firstLastCap              
//   catBuilder              
//   printObject             
//   getFullname                  
//   valuePair
//   peakFinder 
//   divisibleByThreePairSum
//   zipArray
//   twoDimensionalTotal
//   capVowels
//   nextTwoPrimes
//   pairProduct
//   twoDimensionalSize
//   elementCount
//   titleize
//   isElement
//   minMaxProduct
//   phraseFinder
//   multiples
//   longWordCount
//   factorial
//   lcm
//   hipsterfy
//   objectToString
//   shortestWord
//   greatestCommonFactor
//   valueConcat
//   hipsterfyWord


// **********************************************************************
// advanced  
//
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




// ********************************
// *****       basic          *****
// ********************************


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


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return a new string with the last vowel removed 
// If there are no vowels in the string return the string.
//
// Examples :
//
// removeLastVowel('mississippi') // => 'mississipp'
// removeLastVowel('happy') // => 'hppy'
// removeLastVowel('cry') // => 'cry'
// **********************************************************************

function removeLastVowel(str) {
  var vowels = 'aeiou';

  for (var i = str.length; i >= 0; i -= 1) {
    var cur = str[i];

    if (vowels.indexOf(cur) > -1) {
      var before = str.slice(0, i);
      var after = str.slice(i + 1);

      return before + after;
    }
  }

  return str;
}


// **********************************************************************





// ********************************
// *****       actual         *****
// ********************************

// P0

// ******************************************************************************
// Write a function average(num1, num2) that returns the average of two numbers.

// Examples:

// average(10, 20); // => 15
// average(5, 7); // => 6
// average(24, 32); // => 28
// ******************************************************************************

function average(num1, num2) {
  var sum = num1 + num2;

  return sum / 2;
}

// *******************************************************************************
// Write a function tripler(array) that takes in an array and returns a new array
// containing 3 times every element of the original array.

// Examples:

// tripler([1,2,3]); // => [ 3, 6, 9 ]
// tripler([4, 1, 7]); // => [ 12, 3, 21 ]
// *******************************************************************************


function tripler(array) {
  var results = [];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    results.push(num * 3);
  }

  return results;
}

/******************************************************************************
** Write a function oddRange(end) that takes in a number and returns an array containing
** all positive odd numbers up to `end`.
**
** Examples:
**
** oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
** oddRange(6); // => [ 1, 3, 5 ]
*/

function oddRange(end) {
  var odds = [];

  for (var num = 1; num <= end; num += 1) {

    if (num % 2 === 1) {
      odds.push(num);
    }
  }

  return odds;
}


// P1


/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(13, 20) => [ 14, 16, 18, 20 ]
evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

function evenRange(start, end) {
  var array = [];

  for(var i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }

  return array;
}

/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  var words = string.split('-');
  var reversed = [];

  for (var i = words.length - 1; i >= 0; i--) {
    var word = words[i];
    reversed.push(word);
  }

  var reversedStr = reversed.join('-');
  return reversedStr;
}

/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
  var commonEles = [];

  for (var i = 0; i < arr1.length; i++) {
    var ele = arr1[i];
    if (arr2.indexOf(ele) > -1) {
      commonEles.push(ele);
    }
  }

  return commonEles;
}

/******************************************************************************
Write a function fuzzBizz(max) that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

Examples:

fuzzBizz(17) => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
fuzzBizz(30) => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
*******************************************************************************/

function fuzzBizz(max) {
  var nums = [];

  for (var i = 0; i < max; i++) {
    if ((i % 2 === 0 || i % 7 === 0) && i % 14 !== 0) {
      nums.push(i);
    }
  }

  return nums;
}

/*******************************************************************************
Write a function arrayRange(min, max, step) that takes in 3 numbers as parameters
The function should return an array containing all numbers between `min` and `max`
at `step` intervals.

Examples:

arrayRange(0, 12, 2) => [ 0, 2, 4, 6, 8, 10, 12 ]
arrayRange(2, 5, 1) => [ 2, 3, 4, 5 ]
arrayRange(100, 20, 3) => []
*******************************************************************************/

function arrayRange(min, max, step) {
  var arr = [];

  for (var i = min; i <= max; i += step) {
    arr.push(i);
  }

  return arr;
}


// P2


/*******************************************************************************
Write a function reverseOddRange(start, end) that returns an array containing all
odd numbers between 'start' and 'end'  in reverse-sequential order. Use a
loop to do this.

Examples:

reverseOddRange(10, 20) => [ 19, 17, 15, 13, 11 ]
reverseOddRange(3, 7) => [ 7, 5, 3 ]
reverseOddRange(9, 5) => []
*******************************************************************************/

function reverseOddRange(start, end) {
  var odds = [];

  for (var num = end; num >= start; num -= 1) {
    if (num % 2 === 1) {
      odds.push(num);
    }
  }

  return odds;
}

/*******************************************************************************
Write a function isSquare(number) that takes in a number and returns true if the
number is a perfect square, false otherwise. A perfect square is a number that is
the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect
square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.

Examples:

isSquare(7) => false
isSquare(15) => false
isSquare(18) => false
isSquare(25) => true
isSquare(36) => true
isSquare(9) => true
isSquare(16) => true
*******************************************************************************/

function isSquare(number) {

  for (var i = 1; i < number; i += 1) {

    if (i * i === number) {
      return true;
    }
  }

  return false;
}

/*******************************************************************************
Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
should be in reverse-sequential order.

Examples:

mysticNumbers(25) => [ 20, 18, 16, 8, 6, 4 ]
mysticNumbers(14) => [ 8, 6, 4 ]
*******************************************************************************/

function mysticNumbers(max) {
  var results = [];

  for (var num = max - 1; num > 1; num -= 1) {
    var isDivFour = num % 4 === 0;
    var isDivSix = num % 6 === 0;

    if (!isDivFour && isDivSix) {

      results.push(num);
    } else if (isDivFour && !isDivSix) {

      results.push(num);
    }
  }

  return results;
}

/******************************************************************************
Write a function firstOrLast(array) that takes in an array and returns either:

- the first element if there is an even number of elements in the array

- the last element if there is an odd number of elemetns in the array

You can assume the array contains at least one element.

Examples:

firstOrLast(['a', 'b', 'c', 'd']) => 'a'
firstOrLast(['Jenny', 'Mary', 'Mark']) => 'Mark'
*******************************************************************************/

function firstOrLast(array) {
  var isEven = array.length % 2 === 0;

  if (isEven) {

    return array[0];
  } else {

    return array[array.length - 1];
  }
}

/*******************************************************************************
Write a function fromMeToYou(sentence) that returns a string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

function fromMeToYou(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word === 'me') {

      newWords.push('you');
    } else {

      newWords.push(word);
    }
  }

  var newStr = newWords.join(' ');
  return newStr;
}


// w2d1


/***********************************************************************
Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.

Examples:

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true
***********************************************************************/

function diffArrayLen(arr1, arr2) {
  return arr1.length !== arr2.length;
}

/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {

  for (var i = array.length - 1; i >= 0; i -= 1) {
    array.push(array[i]);
  }

  return array;
}

/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];

    sum += ele;
  }

  return sum / array.length;
}

/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

function abbreviate(sentence) {
  var words = sentence.split(' ');
  var finalWords = []; 
  var vowels = 'aeiou';

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length > 4) {
      var newStr = '';

      for (var j = 0; j < word.length; j += 1) {
        var ele = word[j];

        if (vowels.indexOf(ele) === -1) {
          newStr += ele;
        }
      }

      finalWords.push(newStr);
    } else {

      finalWords.push(word);
    }
  }

  return finalWords.join(' ');
}

/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
  var words = sentence.split(' ');

  for (var i = 0; i < words.length; i += 1) {
    var split = words[i].toLowerCase().split('');

    for (var j = 0; j < split.length; j += 1) {
      if (j === 0 || j === split.length - 1) {
        split[j] = split[j].toUpperCase();
      } 
    }

    words[i] = split.join('');
  }

  return words.join(' ');
}

/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

function catBuilder(name, color, toys) {
  return {
    'name': name,
    'color': color,
    'toys': toys
  }
}

/***********************************************************************
Write a function `printObject(obj)` that prints out all key-value pairs
of an object. HINT: use a for loop.

Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints

`name - App Academy`
`color - Red`
`population - 120`
***********************************************************************/


function printObject(obj) {
  for (var key in obj) {
    console.log(obj[key]);
  }
}

/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.

Examples:

var p1 = {firstName: 'John', lastName: 'Doe'};
getFullname(p1); // => 'John Doe'

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullname(p2); // => 'Charlie Brown'
***********************************************************************/

function getFullname(person) {
  return person.firstName + ' ' + person.lastName;
}

/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  var results = [];

  results.push(obj1[key]);
  results.push(obj2[key]);

  return results;
}

/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

function doesKeyExist(obj, key) {
  let keys = Object.keys(obj);
  return keys.indexOf(key) !== -1; 
}


// w2d4


/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:

peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

function peakFinder(array) {
  var peaks = [];

  for (var i = 0; i < array.length; i++) {
    var back = array[i - 1];
    var forward = array[i + 1];
    if (back && forward) {
      if (array[i] > back && array[i] > forward) {
        peaks.push(i);
      }
    }
    if (!back) {
      if (array[i] > forward) {
        peaks.push(i);
      }
    }
    if (!forward) {
      if (array[i] > back) {
        peaks.push(i);
      }
    }
  }

  return peaks;
}

/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/

function divisibleByThreePairSum(array) {
  var results = [];

  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      var sum = array[i] + array[j];
      if (sum % 3 === 0) {
        results.push([i, j]);
      }
    }
  }

  return results;
}

/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.

Examples:

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
***********************************************************************/

function zipArray(arr1, arr2) {
  var results = [];

  for (var i = 0; i < arr1.length; i++) {
    var newArr = [arr1[i], arr2[i]];
    results.push(newArr);
  }

  return results;
}

/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2); // => 15
***********************************************************************/

function twoDimensionalTotal(array) {
  var sum = 0;

  for (var row of array) {
    for (var num of row) {
      sum += num;
    }
  }

  return sum;
}


// w2d4


/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
  var vowels = 'AEIOUaeiou';
  var chars = string.split('');

  for (var i = 0; i < chars.length; i++) {
    var index = vowels.indexOf(chars[i]);

    if (index !== -1) {
      chars[i] = chars[i].toUpperCase(); 
    } else {
      chars[i] = chars[i].toLowerCase();
    }
  }

  return chars.join('');
}

/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

function nextTwoPrimes(num) {
  var count = num + 1;
  var twoPrimes = [];

  while (twoPrimes.length < 2) {
    if (isPrime(count)) {
      twoPrimes.push(count);
    }

    count += 1;
  }

  return twoPrimes;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

function pairProduct(arr, num) {
  var pairs = [];
  var i = 0;

  while(i < arr.length - 1) {
    var j = i + 1;

    while(j < arr.length) {
      if (arr[i] * arr[j] === num) {
        pairs.push([i, j]);
      }
      j += 1;
    }
    i += 1;
  }

  return pairs;
}

/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.

Examples:

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

twoDimensionalSize(arr1); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

twoDimensionalSize(arr2); // => 5
***********************************************************************/

function twoDimensionalSize(array) {
  var total = 0;

  for (var i = 0; i < array.length; i += 1) {
    total += array[i].length;
  }

  return total;
}

/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.

Example:
elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
***********************************************************************/

function elementCount(array) {
  var counts = {};

  for (var i = 0; i < array.length; i += 1) {
    if (counts[array[i]] === undefined) {
      counts[array[i]] = 1;
    } else {
      counts[array[i]] += 1;
    }
  }

  return counts;
}

/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/

function removePunctuation(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];

  if (punctuation.indexOf(word[word.length - 1]) !== -1) {
    return word.slice(0, word.length - 1).toLowerCase();
  }

  return word.toLowerCase();
}

function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();

  return firstLetter + restOfWord;
}

function titleize(title, stopWords) {
  var wordsArr = title.split(' ');

  for (var i = 0; i < wordsArr.length; i += 1) {
    var word = wordsArr[i];

    if (stopWords.indexOf(removePunctuation(word)) === -1) {
      wordsArr[i] = capitalize(word);
    } else {
      wordsArr[i] = word.toLowerCase();
    }
  }

  return wordsArr.join(' ');
}


// P3


/*******************************************************************************
Write a function isElement(array, ele) that takes an array and an element.
The function should return true if the element is found inside of the array, it
should return false otherwise.

DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

isElement([1,2,3,4,5], 5) => true
isElement(["a", "b", "c"], "a") => true
isElement(["a", "b", "c"], "d") => false
*******************************************************************************/

function isElement(array, ele){

  for (var i = 0; i < array.length; i += 1) {
    var cur = array[i];

    if (cur === ele) {
      return true;
    }
  }

  return false;
}

/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

function minMaxProduct(array){
  var maxNum = array[0];
  var minNum = array[0];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (maxNum < num) {
      maxNum = num;
    }

    if (minNum > num) {
      minNum = num;
    }
  }

  return maxNum * minNum;
}

/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/

function phraseFinder(words, phrase){
  var phraseWords = phrase.split(' ');
  
  for (var i = 0; i < phraseWords.length; i += 1) {
    var phraseWord = phraseWords[i];

    if (words.indexOf(phraseWord) === -1) {
      return false;
    }
  }

  return true;
}

/*******************************************************************************
Write a function that multiples(max, num) that takes in two numbers. The function
should return an array of positive numbers less than `max` that are multiples of `num`.

Examples:

multiples(10, 2) => [ 2, 4, 6, 8 ]
multiples(15, 3) => [ 3, 6, 9, 12 ]
*******************************************************************************/

function multiples(max, num){
  var results = [];

  for (var i = num; i < max; i += num) {
    results.push(i);
  }

  return results;
}

/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/

function valueReplace(array, obj){
  var results = [];

  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];

    if (obj[ele] !== undefined) {

      results.push(obj[ele]);
    } else {
      results.push(ele);
    }
  }

  return results;
}


// w2d5


/***********************************************************************
Write a function `longWordCount(string)` that takes in a string and
returns the number of words longer than 7 characters.

Examples:

longWordCount(""); // => 0
longWordCount("short words only"); // => 0
longWordCount("one reallylong word"); // => 1
longWordCount("two reallylong words inthisstring"); // => 2
longWordCount("allwordword longwordword wordswordword"); // => 3
longWordCount("seventy schfifty five"); // => 1
***********************************************************************/

function longWordCount(sentence) {
  var words = sentence.split(' ');
  var count = 0;

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length > 7) {
      count += 1;
    }
  }

  return count;
}

/***********************************************************************
Write a function `factorial(n)`, that returns the factorial of the
number `n`. For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.

Examples:

factorial(1); // => 1
factorial(4); // => 24
factorial(5); // => 120
factorial(10); // => 3628800
***********************************************************************/

function factorial(n) {
  var total = 1;

  while (n > 1) {
    total *= n;

    n -= 1;
  }

  return total;
}

/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/

function lcm(num1, num2) {
  var multiplier = num1

  while (true) {
    if (multiplier % num2 === 0) {
      return multiplier;
    }

    multiplier += num1;
  }
}

/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/

function hipsterfy(sentence) {
  var words = sentence.split(' ');
  var result = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    var hipsterified = removeLastVowel(word);

    result.push(hipsterified);
  }
  
  return result.join(' ');
}

function removeLastVowel(word) {
  var vowels = 'aeiou'

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i];

    if (vowels.indexOf(char) > -1) {
      var first = word.slice(0, i);
      var rest = word.slice(i + 1);

      return first + rest;
    }
  }

  return word;
}


// P4


/*******************************************************************************
Write a function `objectToString(count)` that takes in a char count object and
returns a string representing the counts of each character.

Examples:

objectToString({a : 2, b: 4, c: 1}) => 'aabbbbc'
objectToString({b: 1, o: 2, t: 1}) => 'boot'
*******************************************************************************/

function objectToString(count) {
  var str = '';

  for (var key in count) {
    var value = count[key];

    for (var i = 0; i < value; i += 1) {
      str += key;
    }
  }

  return str;
}

/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  var words = sentence.split(' ');
  var shortest = words[0];

  for (var i = 1; i < words.length; i += 1) {
    var word = words[i];

    if (word.length < shortest.length) {
      shortest = word;
    }
  }

  return shortest;
}

/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
  var decNum = num1;

  while (true) {

    if (num1 % decNum === 0 && num2 % decNum === 0) {
      return decNum;
    }

    decNum -= 1;
  }
}

/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/

function valueConcat(array, obj) {
  var results = [];

  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];
    var str = '';

    if (obj[ele] !== undefined) {

      str = ele + obj[ele];
    } else {

      str = ele;
    }

    results.push(str);
  }

  return results;
}

/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
  var vowels = 'AEIOUaeiou';

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i];

    if (vowels.indexOf(char) > -1) {
      var first = word.slice(0, i);
      var rest = word.slice(i + 1);

      return first + rest;
    }
  }

  return word;
}



// ********************************
// *****     advanced         *****
// ********************************



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
