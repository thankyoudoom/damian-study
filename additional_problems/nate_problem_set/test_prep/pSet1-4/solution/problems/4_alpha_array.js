// **********************************************************************  
// alphaArray
//
// Given an array of characters, sort them in alphabetcial order.
// You must sort in place, meaning you can swap one value with another in the array. 
// You may not use an additional array or data structure.
//
// Example :
//
// var arr = ['h', 'o', 'w', 'a', 'r', 'e', 'y', 'o', 'u', 't', 'o', 'd', 'a', 'y'];
// alphaArray(arr); // => ['a', 'a', 'd', 'e', 'h', 'o', 'o', 'o', 'r', 't', 'u', 'w', 'y', 'y'];
// **********************************************************************  
function alphaArray(arr) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var sortIdx = 0;

  for (var i = 0; i < alpha.length; i += 1) {
    var char = alpha[i];

    for (var j = sortIdx; j < arr.length; j += 1) {
      var cur = arr[j];

      if (cur === char) {
        arr[j] = arr[sortIdx];
        arr[sortIdx] = cur;

        sortIdx += 1;
      }
    }
  }

  return arr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alphaArray;
