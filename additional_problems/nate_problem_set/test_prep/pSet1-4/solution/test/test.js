/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var objectDecoder = tryRequire('../problems/1_object_decoder.js');
var isAnagram = tryRequire('../problems/2_is_anagram.js');
var corruptedToys = tryRequire('../problems/3_corrupted_toys.js');
var alphaArray = tryRequire('../problems/4_alpha_array.js');

describe('objectDecoder()', function () {
  it('should return a string phrase decoded from an object', function () {
    var obj1 = { 
      9 : 's', 4 : 'k', 3 : 'i', 12 : '!', 6 : ' ', 10 : 't', 8 : 'e',
      5 : 'e', 1 : ' ', 0 : 'I', 7 : 'p', 2 : 'l', 11 : 'o', 
    }

    var obj2 = {
      11 : 'u', 3 : 'i', 4 : 'n', 5 : 'g', 12 : 'n', 2 : 'i', 6 : ' ', 
      0 : 'S', 8 : 's', 1 : 'k', 9 : ' ', 10 : 'f', 7 : 'i', 
    }

    assert.deepEqual(objectDecoder(obj1), 'I like pesto!');
    assert.deepEqual(objectDecoder(obj2), 'Skiing is fun');
  });
});


describe('isAnagram()', function () {
  it('should return boolean true if str1 has all the same characters as str2, false otherwise', function () {
    assert.deepEqual(isAnagram('elbow', 'below'), true);
    assert.deepEqual(isAnagram('cat', 'rat'), false);
    assert.deepEqual(isAnagram('stressed', 'desserts'), true);
    assert.deepEqual(isAnagram('fourth of july', 'joyful fourth'), true);
    assert.deepEqual(isAnagram('happy', 'hippie day'), false);
  });
});

describe('corruptedToys()', function () {
  it('should convert a string of toy information into an object', function () {
    var result1 = corruptedToys('49503328tambourine988false');
    var solution1 = {
      modelNumber : '49503328',
      toyName : 'tambourine',
      price : '$9.88',
      inStock : 'false'
    }

    var result2 = corruptedToys('938475549slime1119true');
    var solution2 = {
      modelNumber : '938475549',
      toyName : 'slime',
      price : '$11.19',
      inStock : 'true'
    }

    assert.deepEqual(result1, solution1);
    assert.deepEqual(result2, solution2);
  });
});


describe('alphaArray()', function () {
  it('should return an array of sorted characters', function () {
    var arr1 = ['h', 'o', 'w', 'a', 'r', 'e', 'y', 'o', 'u', 't', 'o', 'd', 'a', 'y'];
    var solution1 = ['a', 'a', 'd', 'e', 'h', 'o', 'o', 'o', 'r', 't', 'u', 'w', 'y', 'y'];

    var arr2 = 'letsgotothepark'.split('');
    var solution2 = ['a', 'e', 'e', 'g', 'h', 'k', 'l', 'o', 'o', 'p', 'r', 's', 't', 't', 't'];

    assert.deepEqual(alphaArray(arr1), solution1); 
    assert.deepEqual(alphaArray(arr2), solution2); 
  });
});

