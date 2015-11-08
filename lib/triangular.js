var Algorithm = require('./algorithm');
/**
 * Compute the Nth triangular number
 *
 * e.g. 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 * The 7th triangular number is 28
 *
 * @class Triangular
 */
var Triangular = function() {
  Algorithm.call(this);
};

Triangular.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @return {integer}
 * @method solve
 * @public
 */

Triangular.prototype.solve = function(n) {

  this.resetInterval();

  this.iterate({start:1, end: n}).onEach(function(current) {

    this.total += current.value;

  });

  return this.total;

};

module.exports = Triangular;
