/**
 * Produce the permutations for an integer, e.g. 321 =>
 * [321, 312, 231, 213, 123, 132]
 * @class Permutations
 */

Permutations = function() {
	Algorithm.call(this);
};

Permutations.prototype = new Algorithm();

/**
 * @method digits 
 * @param {Integer} n
 * @return {Array}
 */

Permutations.prototype.digits = function(n) {
  return this.value(n).getDigits();
};

/**
 * @param {Integer} n
 * @return {Array}
 * @method solve
 * @public
 */

Permutations.prototype.solve = function(n, digits) {

  if (typeof digits === 'undefined') {
    digits = this.digits(n);
  }

  var result = [];
  var check = {};

  if (digits.length === 1) {
    result = digits;
  } else if (digits.length === 2) {
    return [
      [digits[0], digits[1]],
      [digits[1], digits[0]]
    ];
  } else {
    for (var i = 0; i < digits.length; i++) {

      var left = [];
      var current = digits[i];

      if (i === 0) {
        left = digits.slice(1);
      } else {
        left = digits.slice(0, i).concat(digits.slice(i+1));
      }

      left = this.solve(n, left);

      for (var j = 0; j < left.length; j++) {
        var tleft = left[j];
        for (var k = 0; k <= tleft.length; k++) {
          var candidate = tleft.slice(0, k).concat(current).concat(tleft.slice(k));
          var key = candidate.join('');
          if (typeof check[key] === 'undefined') {
            check[key] = true;
            result.push(candidate);
          }
        }
      }
     
    }
  }

  return result;

};

exports.Permutations = Permutations;
