var Algorithm = require('./algorithm');
/**
 * Algorithm to compute Euler's Totient function, that defines
 * the number of numbers less than n which are relatively prime to n.
 *
 * phi(9) = 6 (1, 2, 4, 5, 6 and 8)
 *
 * @class Phi
 * @see http://mathworld.wolfram.com/EuclideanAlgorithm.html
 * @see http://mathworld.wolfram.com/GreatestCommonDivisor.html
 * @see http://en.wikipedia.org/wiki/Binary_GCD_algorithm
 */
var Phi = function() {
  Algorithm.call(this);
  this.identifier = 'Phi';
};

Phi.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @param {Algorithm} relativelyPrimeAlgorithm
 * @return {Integer}
 * @method solve
 * @public
 */

Phi.prototype.solve = function(n, relativelyPrimeAlgorithm) {

  this._count('solve');

  if (typeof relativelyPrimeAlgorithm === 'undefined') {
    var RelativelyPrime = require('../lib/relatively-prime');
    relativelyPrimeAlgorithm = new RelativelyPrime();
  }

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
module.exports = Phi;
