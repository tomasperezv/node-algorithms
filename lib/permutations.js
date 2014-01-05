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
 * @method isCube 
 * @public
 */
Permutations.prototype.isCube = function(n) {
  var root = this.value(n).cubicRoot();
  return (Math.floor(root) == root);
};

/**
 * @param {Integer} n
 * @return {Array}
 * @method solve
 * @public
 */

Permutations.prototype.solve = function(n, digits, matches, max) {

  if (typeof matches != 'undefined' && !this.isCube(n)) {
    return [];
  }

  var parent = false;

  if (typeof digits == 'undefined') {
    digits = this.digits(n);
    parent = true;
  }

  var digitsLength = digits.length;

  var result = [];
  var check = {};

  if (digitsLength == 1) {
    result = [digits];
  } else if (digitsLength == 2) {

    result = [
      [digits[0], digits[1]],
      [digits[1], digits[0]]
    ];

  } else {

    for (var i = 0; i < digitsLength; i++) {

      var current = digits[i];

      var left = [];

      if (i === 0) {
        left = digits.slice(1);
      } else {
        left = digits.slice(0, i).concat(digits.slice(i+1));
      }

      left = this.solve(n, left);
      var leftLength = left.length;

      for (var j = 0; j < leftLength; j++) {

        var tleft = left[j];
        var tleftLength = tleft.length;

        for (var k = 0; k <= tleftLength; k++) {

          var candidate = tleft.slice(0, k).concat(current).concat(tleft.slice(k));
          var key = candidate.join('');

          if (typeof check[key] == 'undefined') {

            check[key] = true;

            if (typeof matches != 'undefined') {
              var data = parseInt(key, 10);

              if (key[0] !== '0' && this.isCube(data)) {
                result.push(candidate);
                if (result.length >= max) {
                  return result;
                }
              }

            } else {
              result.push(candidate);
            }

          }

        }

      }
     
    }
  }

  return result;

};

exports.Permutations = Permutations;
