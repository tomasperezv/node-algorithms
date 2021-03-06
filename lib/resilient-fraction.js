var Algorithm = require('./algorithm');
var GCD = require('./gcd');

/**
 * We shall call a fraction that cannot be cancelled down a
 * resilient fraction.
 *
 * @class ResilientFraction
 */
var ResilientFraction = function() {
  Algorithm.call(this);
  require('./gcd');
  this.gcd = new GCD();
};

ResilientFraction.prototype = new Algorithm();

/**
 * @param {Integer} numerator
 * @param {Integer} denominator
 * @return {Boolean}
 * @method solve
 * @public
 */

ResilientFraction.prototype.solve = function(numerator, denominator) {
  return (this.gcd.solve(numerator, denominator) === 1);
};

module.exports = ResilientFraction;
