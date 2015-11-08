var Algorithm = require('./algorithm');
/**
 * Compute the proper divisors of a number
 *
 * "Numbers less than n, which divide evenly into n"
 *
 * e.g. n = 220 => 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110
 *
 * @class ProperDivisors
 */
var ProperDivisors = function() {
  Algorithm.call(this);
};

ProperDivisors.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @return {integer}
 * @method solve
 * @public
 */

ProperDivisors.prototype.solve = function(n) {

  var properDivisors = [];

  this.iterate({start:1, end: n-1}).onEach(function(current) {

    if (n % current.value === 0) {
      properDivisors.push(current.value);
    }

  });

  return properDivisors;

};

module.exports = ProperDivisors;
