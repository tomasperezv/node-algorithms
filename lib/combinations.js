var Algorithm = require('./algorithm');

/**
 * Compute all the different combinations that we
 * can obtain for an input integer n.
 *
 * e.g. input = 2
 * combinations => [12, 21]
 *
 * @class Combinations 
 */
var Combinations = function() {

  Algorithm.call(this);

  this.combinations = []; 

};

Combinations.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @return {Array}
 * @method solve
 * @public
 */

Combinations.prototype.solve = function(n, pos) {

  var i;

  if (typeof pos === 'undefined') {
    pos = n;
  }

  // Generate the list of digits that we can use
  var digits = [];

  for (i = 1; i <= pos; i++) {
    digits.push(i);
  }

  // Recursive approach
  if (digits.length === 0) {
    return [];
  } else if (digits.length === 1) {
    return [digits[0]];
  } else if (pos <= n) {

    var current = [];
    var previous = this.solve(n, pos-1);

    for (i = 0; i < previous.length; i++) {
      var currentValue = '' + previous[i];
      var currentValueLength = currentValue.length;
      current.push(parseInt(digits[pos-1] + currentValue, 10));
      current.push(parseInt(currentValue + digits[pos-1], 10));
      for (var j = 1; j < currentValueLength; j++) {
        var tmp = currentValue.substring(0, j) + digits[pos-1] + currentValue.substring(j);
        current.push(parseInt(tmp, 10));
      }
    }


    if (pos === n) {
      this.combinations = current;
    } else {
      return current;
    }

  }

  return this.combinations;

};

module.exports = Combinations;

