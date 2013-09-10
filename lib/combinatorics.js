/**
 * Combinatoric utilities.
 *
 * @class Combinatorics
 */

Combinatoric = function() {
};

/**
 * n! / r! (n-r)!
 * @param {Integer} n
 * @param {Integer} r
 * @return {bigNum}
 * @method select
 * @public
 */

Combinatoric.prototype.select = function(n, r) {
  var A = new Value(n).factor();
  var B = new Value(r).factor();
  var C = new Value(n-r).factor();

  return A.div(B.mul(C));
};
