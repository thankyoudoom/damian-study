// **********************************************************************  
// isAnagram

// You are given two strings.
// Determine if the characters of one string can be rearanged to form the characters of the other.
// Strings can have multiple occurrances of the same character.
// Spaces should be ignored.
//
// Examples :
// isAnagram('elbow', 'below'); // => true 
// isAnagram('stressed', 'desserts'); // => true
// isAnagram('fourth of july', 'joyful fourth'); // => true
// isAnagram('happy', 'hippie day'); // => false
// **********************************************************************  

function isAnagram(str1, str2) {
  str1 = str1.split(' ').join('');
  str2 = str2.split(' ').join('');

  if (str1.length !== str2.length) {
    return false;
  }

  var count1 = getCounts(str1);
  var count2 = getCounts(str2);

  for (var key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}

function getCounts(str) {
  var counts = {};

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (counts[cur]) {
      counts[cur] += 1;
    } else {
      counts[cur] = 1;
    }
  }

  return counts;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isAnagram;
