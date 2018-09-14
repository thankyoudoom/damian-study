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
// var user = {
//   name : 'Jane',
//   email : 'jane@mail.com',
//   address : '1233 walnut drive',
// }
//
// getValue(user, 'name') // => 'Jane'
// getValue(user, 'email') // => 'jane@mail.com'
// getValue(user, 'address') // => '1233 walnut drive'
// **********************************************************************

function getValue(obj, key) {
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
}


// **********************************************************************
