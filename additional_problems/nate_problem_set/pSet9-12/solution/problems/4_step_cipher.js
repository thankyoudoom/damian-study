// ********************************************************************** 
// stepCipher (Hard)
//
// You are given a string and an array of steps. => 'H omTi', [5, 3, 2]
// On the first iteration step by the first value in the steps array.
// Once the iteration is complete start from the beginning steping by the next value in the steps array.
// If you get to the end of the steps array start at the beginning.
// 
// On each iteration take each character and place it in a new string.
// Once all characters are used from the original sting, return the new string.
//
// 'H omTi', [5, 3, 2]
// itteration 1 'H----i'  newStr => 'Hi'     (step by 5)
// itteration 2 'x --Tx'  newStr => 'Hi T'   (step by 3)
// itteration 3 'xxo-xx'  newStr => 'Hi To'  (step by 2)
// itteration 4 'xxxmxx'  newStr => 'Hi Tom' (step by 5)
//
// Examples :
// stepCipher('H omTi', [5, 3, 2]); // => 'Hi Tom'
// stepCipher('D veog unip!t', [4, 3, 1]); // => 'Dont give up!'
// stepCipher('Bocm Prtopeap', [8, 6, 7, 4]); // 'Bootcamp Prep'
// stepCipher('Lntioise fncnoagud  er. ', [7, 4, 2]); // 'Learning to code is fun.'
// ********************************************************************** 

function stepCipher(str, steps) {
  var chars = str.split(''); 
  var newStr = '';
  var i = 0;

  while (chars.length > 0) {
    var idx = i % steps.length;
    var curStep = steps[idx];

    for (var j = 0; j < chars.length; j += curStep) {
      newStr += chars[j]
      chars[j] = null;
    }

    chars = removeNulls(chars);
    i += 1;
  }

  return newStr;
}

function removeNulls(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    var cur = arr[i];

    if (cur === null) {
      arr.splice(i, 1);
      i -= 1;
    }
  }

  return arr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stepCipher;
