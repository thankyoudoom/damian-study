// **********************************************************************  
// corruptedToys
//
// You are in charge of a database for a toy store.
// The master file for the store's toy inventory got corrupted!
// Luckily all of the data is there, each toy just needs to be converted from a string back to an object.
// The string holds 4 sections of infomation.
//
// '49503328tambourine988false'
//
// '49503328      tambourine   988    false'
//  modelNumber   toyName     price  inStock
//
// Each section can vary in length, but all strings will have 4 valid sections in correct order.
// The toyname will only contain characters.
// The modelNumber and price will only contain numbers.
// 
// Example :
//
// var str1 = '49503328tambourine988false';
// corruptedToys(str1); 
// => {
//   modelNumber : '495033283',
//   toyName : 'tambourine',
//   price : '$9.88',
//   inStock : 'false'
// }
// **********************************************************************  

function corruptedToys(str) {
  var modelNumber = getNumber(str);
  var str = str.slice(modelNumber.length);

  var toyName = getStr(str);
  str = str.slice(toyName.length);

  var price = getNumber(str);
  var inStock = str.slice(price.length);
  price = convertPrice(price);

  return {
    modelNumber : modelNumber,
    toyName : toyName,
    price : price,
    inStock : inStock,
  }
}

function convertPrice(num) {
  return '$' + num.slice(0, -2) + '.' + num.slice(-2);
}

function getNumber(str) {
  var nums = '0123456789';
  var results = [];
  var i = 0;

  while (nums.indexOf(str[i]) > -1) {
    results.push(str[i]);
    i += 1;
  }

  return results.join('');
}

function getStr(str) {
  var chars = 'abcdefghijklmnopqrstuvwxyz';
  var results = [];
  var i = 0;

  while (chars.indexOf(str[i]) > -1) {
    results.push(str[i]);
    i += 1;
  }

  return results.join('');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = corruptedToys;
