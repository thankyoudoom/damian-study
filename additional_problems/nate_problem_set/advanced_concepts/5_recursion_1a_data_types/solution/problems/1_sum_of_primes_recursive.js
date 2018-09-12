// **********************************************************************
// sumOfPrimes
//
// Create a function that sums up all the prime numbers found under n
// The function should use recursion without loops
//
// Example :
//   n = 11
//     2 + 3 + 5 + 7 + 11   (only prime numbers are included in the total)
//     => 28
//
//   n = 9
//     2 + 3 + 5 + 7
//     => 17
//
//   n = 4
//     2 + 3
//     => 5
//
//   n = 1
//     => 0
//
//   n = -10
//     => 0
//
//
// Examples:
//
// sumOfPrimes(11); // 28
// sumOfPrimes(10); // 17
// sumOfPrimes(5); // 10
//
//
// Hint : use a isPrime helper function
// **********************************************************************

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function sumOfPrimes(n) {
  if (n <= 1) {
    return 0;
  }

  if (isPrime(n)) {
    return n + sumOfPrimes(n - 1)
  } else {
    return sumOfPrimes(n - 1)
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = sumOfPrimes;
