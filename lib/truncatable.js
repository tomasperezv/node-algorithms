/**
 * Algorithm to determine if a number is truncatable.
 *
 * @see http://projecteuler.net/problem=37
 * @class Prime
 */
require('../lib/prime');

Truncatable = function() {
	Algorithm.call(this);
  this.primeAlgorithm = new Prime(true);
};

Truncatable.prototype = new Algorithm();

/**
 * @param {Integer} value
 * @return {Boolean} isPrime
 * @method solve
 * @public
 */

Truncatable.prototype.solve = function(integer) {

	this.resetInterval();

  // Preprocess to avoid computing large primes
  var stringify = integer.toString();
  var current = 1;
  var prefix = '';
  var suffix = '';

  while(current <= stringify.length) {

    prefix = parseInt(stringify.substring(0, current));
    suffix = parseInt(stringify.substring(stringify.length-current));

    if (!this.primeAlgorithm.solve(prefix) || !this.primeAlgorithm.solve(suffix)) {
      return false;
    }

    current++;

  }

  return true;

};

// Expose the object
exports.Truncatable = Truncatable;
