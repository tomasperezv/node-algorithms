var Algorithm = require('./algorithm');
var Prime = require('./prime');

/**
 * Two integers are relatively prime if they share no common positive
 * factors (divisors) except 1.
 *
 * @param {Algorithm} primeAlgorithm
 * @class RelativelyPrime
 */
var RelativelyPrime = function(primeAlgorithm) {
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
module.exports = RelativelyPrime;
