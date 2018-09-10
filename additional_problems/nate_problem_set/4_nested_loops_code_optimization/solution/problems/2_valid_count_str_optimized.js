// **********************************************************************
// validCountStr (optimized)
//
// We previously solved validCountStr(str, sub) while working with nested loops
// Nested loops are not optimal because we are scanning the entire string for each possible character
// The means we are performaing n^2 opperations (where n roughly represents the number of characters in the string)
//
// How can optimize this code by iterating through the string only twice?
//
// Examples :
//
// validCountStr('today is a good day', 't1o3g1'); // => true
// validCountStr('today is a good day', 't1o3g2'); // => false
// validCountStr('today is a good day', ''); // => true
// **********************************************************************

function validCountStr(str, sub) {
  var counts = getCounts(str);

  for (var i = 0; i < sub.length; i += 2) {
    var cur = sub[i];
    var num = Number(sub[i + 1]);

    if (counts[cur] !== num) {
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
module.exports = validCountStr;
