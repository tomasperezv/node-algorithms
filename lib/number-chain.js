var Algorithm = require('./algorithm');
/**
 * Compute a number chain
 * i.e. A number chain is created by continuously adding 
 * the square of the digits in a number to form a new number 
 * until it has been seen before. 
 * e.g. 44 → 32 → 13 → 10 → 1 → 1
 *
 * @class NumberChain
 */
var NumberChain = function() {
	Algorithm.call(this);
};

NumberChain.prototype = new Algorithm();

/**
 * Compute the next value in the sequence
 * @param {Integer} value
 * @method _computeNext
 * @private
 */
NumberChain.prototype._computeNext = function(value) {

  var next = 0;
  var digits = this.value(value).getDigitsKey();
  for (var i = 0; i < digits.length; i++) {
    next += Math.pow(digits[i], 2);
  }

  return next;

};

/**
 * @param {Integer} n
 * @return {Integer} repetition e.g. solve(44) => 1
 * @method solveCommon
 * @public
 */

NumberChain.prototype.solveCommon = function(n) {

  // Stores the different values computed in the chain
  var values = [];
  var current = n;

  while (values.indexOf(current) === -1) {

    values.push(current);
    current = this._computeNext(current);

  }

  return current;

};

/**
 * @param {Integer} n
 * @return {Integer} repetition e.g. solve(44, 89) => false
 * @method solve
 * @public
 */
NumberChain.prototype.solve = function(n, expected) {

  var current = n;
  var found = false;

  while (found === false) {

    current = this._computeNext(current);

    if (current === expected) {
      found = true;
    } else if (current === 1) {
      break;
    }

  }

  return found;

};

module.exports = NumberChain;
