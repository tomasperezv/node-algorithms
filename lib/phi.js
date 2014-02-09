/**
 * Algorithm to compute Euler's Totient function, that defines
 * the number of numbers less than n which are relatively prime to n.
 *
 * phi(9) = 6 (1, 2, 4, 5, 6 and 8)
 *
 * @class Phi
 */

Phi = function() {
  Algorithm.call(this);
};

Phi.prototype = new Algorithm();

/**
 * @param {Integer} n 
 * @return {Integer}
 * @method solve
 * @public
 */

Phi.prototype.solve = function(n) {

  require('../lib/relatively-prime');
  var relativelyPrimeAlgorithm = new RelativelyPrime();

  // n is going to be always divisible by 1
  var relativePrimes = 1;

  for (var i = 2; i < n; i++) {
    if (relativelyPrimeAlgorithm.solve(i, n)) {
      relativePrimes++;
    }
  }

  return (n - relativePrimes);

};

// Expose the object
exports.Phi = Phi;
