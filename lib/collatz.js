var Algorithm = require('./algorithm');
/**
 * Algorithm to generate the Collatz sequence.
 *
 * @class Collazt
 */
var Collatz = function() {
  Algorithm.call(this);
};

Collatz.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @return {Integer} Collatz
 * @method solve
 * @public
 */

Collatz.prototype.solve = function(n) {

  this.resetInterval();

  if (this.value(n).isEven()) {
    return (n / 2);
  } else {
    return (3*n + 1);
  }

};

module.exports = Collatz;
