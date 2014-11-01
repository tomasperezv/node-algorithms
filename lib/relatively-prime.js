var Algorithm = require('../lib/algorithm');
/**
 * Two integers are relatively prime if they share no common positive 
 * factors (divisors) except 1.
 *
 * @class RelativelyPrime
 */
RelativelyPrime = function() {

  Algorithm.call(this);
  this._cache = {};

};

RelativelyPrime.prototype = new Algorithm();

/**
 * @param {Integer} n 
 * @param {Integer} n 
 * @return {Boolean} True if n and m are relatively prime.
 * @method solve
 * @public
 */
RelativelyPrime.prototype.solve = function(n, m) {

  // 2 numbers are relatively prime if gcd(n, m) = 1
  var isRelativelyPrime = true;
  var cached = null;

  if (n != m) {

    // The Euclidean sequence must be ordered
    var a = n > m ? n : m;
    var b = n > m ? m : n;
    var sub = a - b;

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

  if (sub == 1) {
    isRelativelyPrime = false;
  }

  return isRelativelyPrime;

};

// Expose the object
exports.RelativelyPrime = RelativelyPrime;
