/***********************************************************************
Write a function valueCounter(object, value), find the number of times
the 'value' is the same as a value in the object.
***********************************************************************/

//Example:
// obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
// valueCounter(obj1, 'Anne') // => 3

// obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
// valueCounter(obj2, 88) // => 0

function valueCounter(object, value){
  var counter = 0;

  for (var key in object) {
    var val = object[key];

    if(val === value){
      counter++
    }
  }
  
  return counter;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valueCounter;