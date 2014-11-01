var Algorithm = require('../lib/algorithm');
/**
 * The square root of two can be expressed as an infinite continued fraction.
 * i.e. 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...
 * @class SquareRoot
 */

SquareRoot = function() {
	Algorithm.call(this);
	this._fractionCache = {};
};

SquareRoot.prototype = new Algorithm();

/**
 * fraction(1) = 2
 * fraction(2) = 2 + 1/2
 * fraction(3) = 2 + (1/fraction(2))
 * ...
 * fraction(n) = 2 + (1/fraction(n-1))
 *
 * @param {Number} n
 * @method fraction 
 * @return {Number}
 * @public
 */
SquareRoot.prototype.fraction = function(n) {

  var result;

  if (typeof this._fractionCache[n] !== 'undefined') {
    result = this._fractionCache[n];
  } else {

    if (n === 1) {
      result = 2;
    } else {
      result = 2 + (1 / (this.fraction(n-1)));
    }

    this._fractionCache[n] = result;

  }

  return result;

};

/**
 * @param {Integer} n
 * @method solve
 * @public
 */

SquareRoot.prototype.solve = function(n) {
  return 1 + (1/this.fraction(n));
};
