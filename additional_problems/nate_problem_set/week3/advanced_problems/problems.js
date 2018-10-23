/ ********************************
// *****   Problems Week 3    *****
// ********************************


// advanced problems   (18 problems)


// **********************************************************************
// countIndexMod
// mySlice
// objFreqCount
// arrFreqCount
// countLongVowels
// forEachFreqCount
// getOnlineUsers
// findIntersects
// filterPeakFinder
// threeInARowMethod
// hasEveryVowelMethod
// isSortedMethod
// variableNamifyMethod
// capitalizeMethod
// removeVowelMethod
// getSurfingFriends   
// mySplice           


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return the sum of all numbers that have an index evenly divisible by 3.
// 
// Example : 
// countIndexMod([5, 2, 3, 1, 6, 8, 9, 4], 2, 2); // => 15 (5 + 1 + 9)
// countIndexMod([2, 4, 3, 0, 5], 2, 2); // => 2
// countIndexMod([9, 3], 2, 2); // => 9
// **********************************************************************

function countIndexMod(nums) {
}


// **********************************************************************
// Write a function that accepts string and two index numbers as arugments.
// The function should return a portion of the string according to the two indexes.
// The first index is the starting index, the second is the endind index (exclisive)
// If the second argument is not specified return the remainder of the string
// Do not nuse .slice() in your solutoin
// 
// Example : 
// mySlice('bootcamp', 2, 5); // => 'otc';
// mySlice('bootcamp', 1); // => 'ootcamp';
// mySlice('bootcamp', 0, 6); // => 'bootc';
// **********************************************************************

function mySlice(str, idx1, idx2) {
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return an object with the frequency counts of each word.
// The following punctuation should be removed ",.';:?!"
// Caplitalization should be preserved
// 
// Example : 
//
// objFreqCount("The person we saw, saw a saw."); 
//    // => {The: 1, person: 1, we: 1, saw: 3, a: 1}
// objFreqCount('go dog go'); 
//    // => {go: 2, dog: 1}
// **********************************************************************

function objFreqCount(str) {
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return an array of sub arrays holding the frequcny counts of each word.
// The following punctuation should be removed ",.';:?!"
// Caplitalization should be preserved
// 
// Example : 
// arrFreqCount("The man we saw, saw a saw."); 
//   // => [['The', 1], ['man', 1], ['we', 1], ['saw', 3], ['a', 1]]
// arrFreqCount('go dog go!'); 
//   // => [['go', 2], ['dog', 1]]
// **********************************************************************

function arrFreqCount(str) {
}


// **********************************************************************
// Write a function that accepts a string of words as an argument.
// The function should return the count of words that have more than 2 vowels.
// Use the built in 'forEach' method to solve this.
// 
// Example : 
//
// countLongVowels('bootcamp prep') // => 1
// countLongVowels('It is a beautiful apartment') // => 2
// countLongVowels('I like ice cream'); // => 0 
// **********************************************************************

function countLongVowels(str) {
}


// **********************************************************************
// Write a function that accepts a string of characters as an argument.
// The function should return an object of frequency counts for each character in the string.
// Spaces and punction should also be counted.
// Use the built in 'forEach' method to solve this.
// 
// Example : 
//
// forEachFreqCount('raccoon'); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
// forEachFreqCount('go dog go'); // => {g: 3, o: 3, ' ': 2, d: 1}
// **********************************************************************

function forEachFreqCount(str) {
}


// **********************************************************************
// Write a function that accepts an array of user objects as an argument.
// The function should return an array of all users that are currently online.
// Use the built in 'filter' method to solve this.
// 
// Example : 
//
// var users = [
//   {
//     name : 'jess',
//     email : 'jess@mail.com',
//     isOnline : true,
//   },
//   {
//     name : 'malcolm',
//     email : 'malcolm@mail.com',
//     isOnline : false,
//   },
//   {
//     name : 'mitch',
//     email : 'mitch@mail.com',
//     isOnline : false,
//   },
//   {
//     name : 'terry',
//     email : 'terry@mail.com',
//     isOnline : true,
//   },
// ]
//
// getOnlineUsers(users); // => [
//   {
//     name : 'jess',
//     email : 'jess@mail.com',
//     isOnline : true,
//   },
//   {
//     name : 'terry',
//     email : 'terry@mail.com',
//     isOnline : true,
//   },
// ]
// **********************************************************************

function getOnlineUsers(arr) {
}


// **********************************************************************
// Write a function that accepts two arrays of numbers.
// The function should return an array of all numbers that are found in both arrays.
// Use the built in 'filter' method to solve this.
// 
// Example : 
//
// findIntersects([2, 4, 6], [2, 3, 4]); // => [2, 4];
// findIntersects([2, 4, 6], []); // => [];
// findIntersects([2], [2]); // => [2];
// **********************************************************************

function findIntersects(arr1, arr2) {
}


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
// filterPeakFinder([1, 2, 1, 3, 5, 2]); // => [2, 5]
// filterPeakFinder([5, 4, 3, 6, 5]); // => [5, 6]
// filterPeakFinder([1, 2, 3, 4]); // => [4]
// filterPeakFinder([4, 3, 2, 1]); // => [4]
// **********************************************************************

function filterPeakFinder(arr) {
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return true if the same number is repeated 3 times in a row, false otherwise.
// Use a built in method in your solution do not use a for loop.
// 
// Example : 
// threeInARowMethod([4, 3, 7, 7, 7, 13, 8]); // => true;
// threeInARowMethod([7, 7, 7]); // => true;
// threeInARowMethod([6, 6]); // => false;
// threeInARowMethod([10, 9, 20, 33, 3, 3]); // => false;
// **********************************************************************

function threeInARowMethod(arr) {
}


// **********************************************************************
// Write a function that accepts a string as an argument.
// The funtion should return true if every vowel exists in the string, false otherwise.
// Use a built in method in your solution do not use a for loop.
//
// Examples :
//
// hasEveryVowelMethod('education'); // => true
// hasEveryVowelMethod('coding is fun'); // => false
// **********************************************************************

function hasEveryVowelMethod(str) {
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return true if the numbers are sorted, false otherwise.
// The solution should use a built in method.
// 
// Examples : 
// isSortedMethod([1, 2, 3, 4]); // => true;
// isSortedMethod([1, 2, 2, 3]); // => true;
// isSortedMethod([-2, 0, 3]); // => true;
// isSortedMethod([0, -1]); // => false;
// isSortedMethod([-10, -4, -9]); // => false;
// isSortedMethod([-10, -4, 0, 11, 22, 90]); // => true;
// **********************************************************************

function isSortedMethod(arr) {
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return the string of words coverted to camel case.
// The solution should use a built in method, do not use a for loop.
// 
// Examples : 
//
// variableNamifyMethod('bootcamp prep'); // => 'bootcampPrep'
// variableNamifyMethod('I likE coDiNg'); // => 'iLikeCoding'
// variableNamifyMethod('Variable nameify map'); // => 'variableNameifyMap'
// **********************************************************************

function variableNamifyMethod(str) {
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return an new string with all the words uppercased
// Use a built in method to solve this, do not use a for loop.
//
// Examples :
// capitalizeMethod('The cow, juMpeD OvEr the moon.'); // => 'The Cow Jumped Over The Moon'
// capitalizeMethod('bootcamp'); // => 'Bootcamp!'
// **********************************************************************

function capitalizeMethod(str) {
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return the string with all the vowels removed.
// The solution should use a built in method
// 
// Examples : 
//
// removeVowelMethod('Icecream'); // => 'ccrm'
// removeVowelMethod('Bootcamp prep'); // => 'btcmp prp'
// **********************************************************************

function removeVowelMethod(str) {
}


// **********************************************************************
// Write a function that accepts a user string and an allUsers array of user objects.
// The function should return an array of all the friend objects of the user who likes to surf.
// 
// Examples : 
//
// var allUsers = {
//   terry : {
//     email: 'terry@mail.com',
//     friends: ['blake', 'jess', 'malcolm'],
//     likeSurfing : true,
//   },
//   liz : {
//     email: 'terry@mail.com',
//     friends: ['jess', 'malcolm'],
//     likeSurfing : false,
//   },
//   blake : {
//     email: 'terry@mail.com',
//     friends: ['liz', 'jess', 'terry'],
//     likeSurfing : true,
//   },
//   jess : {
//     email: 'terry@mail.com',
//     friends: ['blake', 'terry', 'liz', 'blake'],
//     likeSurfing : false,
//   },
//   malcolm : {
//     email: 'terry@mail.com',
//     friends: ['terry', 'jess', 'liz'],
//     likeSurfing : true,
//   },
// };
//
// getSurfingFriends(allUsers, 'terry'); // => ['blake', 'malcolm']
// getSurfingFriends(allUsers, 'liz'); // => ['malcolm']
// getSurfingFriends(allUsers, 'blake'); // => ['terry']
// getSurfingFriends(allUsers, 'jess'); // => ['blake', 'terry']
// getSurfingFriends(allUsers, 'malcolm'); // => ['terry']
// **********************************************************************

function getSurfingFriends(users, userName) {
}


// **********************************************************************
// Write a function that accepts an array, a starting index and count as arguments.
// The function should return a portion of the array according to start and count.
// The first index is the starting index, the second is the number of elements to return.
// If the second argument is not specified return the remainder of the array.
// **This function should mutate the original array**
// 
// Example : 
// mySplice(['m', 'u', 't', 'a', 't', 'e'], 2, 2); // => ['t', 'a'];
// mySplice(['m', 'u', 't', 'a', 't', 'e'], 1); // => ['u', 't', 'a', 't', 'e'];
// mySplice(['m', 'u', 't', 'a', 't', 'e'], 0, 4); // => ['m', 'u', 't', 'a'];
// **********************************************************************

function mySplice(arr, startIdx, count) {
}





