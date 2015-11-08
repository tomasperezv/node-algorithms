var Algorithm = require('./algorithm');
var Prime = require('./prime');

/**
 * Algorithm to determine if a number is truncatable.
 *
 * @see http://projecteuler.net/problem=37
 * @class Truncatable
 */
var Truncatable = function(maxPrimes) {
	Algorithm.call(this);
  this.primeAlgorithm = new Prime(true);
  this.leftTruncatable = {};
  this.rightTruncatable = {};
  this.cacheHits = 0;

  // Precache primes
  var current = 1;
  while (current < maxPrimes) {
    this.showProgress(current, 10000000, maxPrimes);
    this.primeAlgorithm.solve(current);
    current++;
  }

  console.log('precached ' + this.primeAlgorithm.cache.length + ' primes...');

};

Truncatable.prototype = new Algorithm();

/**
 * @return {Number}
 * @public
 * @method cacheLength
 */
Truncatable.prototype.cacheLength = function() {
  return this.primeAlgorithm.cache.length;
};

/**
 * @param {Integer} value
 * @return {Boolean} isPrime
 * @method solve
 * @public
 */

Truncatable.prototype.solve = function(integer) {

	this.resetInterval();

  // Preprocess to avoid computing large primes
  var stringify = integer;
  var stringifyLength = stringify.length;
  var current = 1;
  var prefix = '';
  var suffix = '';
  var leftFixed = false;
  var rightFixed = false;

  while(current < stringifyLength) {

    if (!leftFixed) {
      if (current < (stringifyLength-1)) {
        var leftRest = parseInt(stringify.substring(current+1));
        if (typeof this.leftTruncatable[leftRest] !== 'undefined') {
          this.cacheHits++;
          leftFixed = true;
        } else if (!this.primeAlgorithm.solve(leftRest)) {
          this.cacheHits++;
          return false;
        }
      }
      prefix = parseInt(stringify.substring(current));
      if (!this.primeAlgorithm.solve(prefix)) {
        return false;
      }
    }

    if (!rightFixed) {
      if (current < (stringifyLength-1)) {
        var rightRest = parseInt(stringify.substring(0, stringifyLength-current-1));

        if (typeof this.rightTruncatable[rightRest] !== 'undefined') {
          this.cacheHits++;
          rightFixed = true;
        } else if (!this.primeAlgorithm.solve(rightRest)) {
          this.cacheHits++;
          return false;
        }
      }

      suffix = parseInt(stringify.substring(0, stringify.length-current));
      if (!this.primeAlgorithm.solve(suffix)) {
        return false;
      }
    }

    if (leftFixed && rightFixed) {
      break;
    }

    current++;

  }

  if (!this.primeAlgorithm.solve(integer)) {
    return false;
  }

  this.leftTruncatable[integer] = true;
  this.rightTruncatable[integer] = true;

  return true;

};

// Expose the object
module.exports = Truncatable;
