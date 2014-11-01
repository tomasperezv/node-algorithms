var Algorithm = require('../lib/algorithm');
/**
 * Algorithms to process integers represented in roman notation.
 *
 * e.g.
 *      var RomanNumerals = require('./lib/roman');
 *      var roman = new RomanNumerals();
 *
 *      console.log(roman.toInteger('III')); // => will output 3
 *      console.log(roman.toInteger('XVI')); // => will output 16
 *
 * @class RomanNumerals
 */

var Algorithm = require('./algorithm');

var RomanNumerals = function() {

  this.map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  Algorithm.call(this);

};

RomanNumerals.prototype = new Algorithm();

/**
 * @param {String} number
 * @return {Integer}
 * @method toInteger
 */
RomanNumerals.prototype.toInteger = function(number) {

  var result = 0,
      i = 0;

  for (i = 0; i < number.length; i++) {

    var currentValue = this.map[number[i]];

    if (i < number.length - 1) {
      if (this.map[number[i]] < this.map[number[i+1]]) {
        currentValue *= -1;
      }
    }

    result += currentValue;

  }

  return result;
};

// Expose the object
module.exports = RomanNumerals;
