/**
 * Algorithm to determine if a number is truncatable.
 *
 * @see http://projecteuler.net/problem=37
 * @class Prime
 */
require('../lib/prime');

Truncatable = function() {
	Algorithm.call(this);
  // Used to cache the primes to speed the algorithm
  this.primes = [];
};

Truncatable.prototype = new Algorithm();

/**
 * @method truncatable
 * @param {Number} value
 * @param {String} order e.g. 'l' left to right, 'r' right to left
 */
Truncatable.prototype.truncatable = function(value, order) {

  var currentIsPrime = false;

  if (typeof this.primes[value] !== 'undefined') {
    currentIsPrime = this.primes[value];
  } else {
    currentIsPrime = new Prime().solve(value);
    this.primes[value] = currentIsPrime;
  }

  if (value < 10 && currentIsPrime) {
    return true;
  } else if (!currentIsPrime) {
    return false;
  } else {
    var stringified = value.toString();
    switch (order) {
      case 'l':
        return this.truncatable(parseInt(stringified.substring(1)), order);
        break;
      case 'r':
        return this.truncatable(parseInt(stringified.substring(0, stringified.length-1)), order);
        break;
    }
  }

};

/**
 * @param {Integer} value
 * @return {Boolean} isPrime
 * @method solve
 * @public
 */

Truncatable.prototype.solve = function(integer) {

	this.resetInterval();

  if (integer < 10 && !(new Prime().solve(integer))) {
    return false;
  } else {
    return (this.truncatable(integer, 'l') && this.truncatable(integer, 'r'));
  }

};

// Expose the object
exports.Truncatable = Truncatable;
