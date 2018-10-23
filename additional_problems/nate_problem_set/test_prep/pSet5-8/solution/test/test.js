/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var isAlphabetized = tryRequire('../problems/1_is_alphabetized.js');
var stringBuilder = tryRequire('../problems/2_string_builder.js');
var scrabbleScore = tryRequire('../problems/3_scrabble_score.js');
var swapCipher = tryRequire('../problems/4_swap_cipher.js');


describe('isAlphabetized()', function () {
  it('should return a boolean true if characters are alphabetical sorted, false otherwise', function () {
    assert.deepEqual(isAlphabetized('abc'), true);
    assert.deepEqual(isAlphabetized('acb'), false);
    assert.deepEqual(isAlphabetized('abbc'), true);
  });
});


describe('stringBuilder()', function () {
  it('should return a string build from the object', function () {
    var obj1 = { 2 : 'c', 3 : 'b', 4 : 'a', 5 : 'd' };
    var obj2 = { 1 : 'z', 2 : 'p', 4 : 'x', 6 : 'a', 7 : 'g' };

    assert.deepEqual(stringBuilder(obj1).split('').sort().join(''), 'aaaabbbccddddd');
    assert.deepEqual(stringBuilder(obj2).split('').sort().join(''), 'aaaaaagggggggppxxxxz');
  });
});


describe('scrabbleScore()', function () {
  it('should convert a strings of characters and integers to a scrabble score', function () {
    assert.deepEqual(scrabbleScore('m2iiii1ssss1pp4'), 18);
    assert.deepEqual(scrabbleScore('b4oo2kk2eee1p4r1'), 20);
    assert.deepEqual(scrabbleScore('mm2a1x8iii1z1e1n1g2'), 21);
  });
});


describe('swapCipher()', function () {
  it('should return a string generated by swaping all indexes with characters', function () {
    var arr1 = [7, 4, 11, 11, 14, 'e', 'o', 'l', 'h', 'l']
    var arr2 = [5, 0, 13, 19, 0, 18, 19, 8, 2, 't', 's', 'n', 'f', 'a', 'a', 't', 'c', 'i'];

    assert.deepEqual(swapCipher(arr1), 'hello'); 
    assert.deepEqual(swapCipher(arr2), 'fantastic'); 
  });
});

