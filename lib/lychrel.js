/**
 * Algorithm to verify if a number is a Lychrel number.
 *
 * A number that never forms a palindrome through the reverse and add 
 * process is called a Lychrel number.
 *
 * @class Lychrel
 */

Lychrel = function() {

	Algorithm.call(this);
  this.MAX_ITERATIONS = 50;

  require('../lib/palindrome');
  this.palindromeAlgorithm = new Palindrome();

};

Lychrel.prototype = new Algorithm();

/**
 * @param {Integer} number
 * @return {Boolean}
 * @method solve
 * @public
 */

Lychrel.prototype.solve = function(number, iteration) {

	var bigNum = require('bignum');

  if (typeof iteration === 'undefined') {
    number = bigNum(number);
    iteration = 1;
  } else if (iteration > this.MAX_ITERATIONS) {
    return true;
  }

  var reverse = bigNum(('' + number).split('').reverse().join(''));
  var sum = number.add(reverse);

  if (this.palindromeAlgorithm.solve(sum)) {
    return false;
  } else {
    return this.solve(sum, iteration+1);
  }

};

// Expose the object
exports.Lychrel = Lychrel;
