var Algorithm = require('./algorithm');

/**
 * Compute the greatest common divisor of 2 numbers.
 *
 * @class GCD
 */
var GCD = function() {
  Algorithm.call(this);
};

GCD.prototype = new Algorithm();

/**
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @method solve
 * @public
 */

GCD.prototype.solve = function(a, b) {

  if (a % b === 0) {
    return b;
  } else if (!b) {
    return a;
  } else {
    return this.solve(b, a % b);
  }

};

module.exports = GCD;
