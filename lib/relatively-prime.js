var Algorithm = require('../lib/algorithm');
/**
 * Two integers are relatively prime if they share no common positive
 * factors (divisors) except 1.
 *
 * @param {Algorithm} primeAlgorithm
 * @class RelativelyPrime
 */
RelativelyPrime = function(primeAlgorithm) {
  Algorithm.call(this);
  this.identifier = 'Relatively Prime';

  if (typeof primeAlgorithm === 'undefined') {
    this._primeAlgorithm = new Prime(true);
  } else {
    this._primeAlgorithm = primeAlgorithm;
  }

};

RelativelyPrime.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @param {Integer} m
 * @return {Boolean} True if n and m are relatively prime.
 * @method solve
 * @public
 */
RelativelyPrime.prototype.solve = function(n, m) {

  // 2 numbers are relatively prime if gcd(n, m) = 1
  var isRelativelyPrime = true;

  /*
  var nIsPrime = this._primeAlgorithm.solve(n, true);
  var mIsPrime = this._primeAlgorithm.solve(m, true);
  if (nIsPrime || mIsPrime) {
    if (nIsPrime && mIsPrime) {
      this._count('solve_cached');
      return true;
    } else if (nIsPrime && n % m === 0) {
      this._count('solve_cached');
      return false;
    } else if (mIsPrime && m % n === 0) {
      this._count('solve_cached');
      return false;
    }
  }
 */

  this._count('solve');

  var sub, a, b;
  if (n !== m) {

    // The Euclidean sequence must be ordered
    a = n > m ? n : m;
    b = n > m ? m : n;
    sub = a - b;

    while (sub > 1) {

      if (sub > b) {
        a = sub;
        sub = a - b;
      } else {
        a = b;
        b = sub;
        sub = a - b;
      }
    }

  }

  if (sub === 1) {
    isRelativelyPrime = false;
  }

  return isRelativelyPrime;

};

// Expose the object
exports.RelativelyPrime = RelativelyPrime;
