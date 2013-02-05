/**
 * Algorithm to verify if a number is a palindrome.
 *
 * @class Palindrome
 */

Palindrome = function() {
	Algorithm.call(this);
};

Palindrome.prototype = new Algorithm();

/**
 * @param {Integer} number
 * @return {Boolean}
 * @method solve
 * @public
 */

Palindrome.prototype.solve = function(number) {

	this.resetInterval();

	var isPalindrome = true;

	var digits = this.value(number).getDigits();
	var numDigits = digits.length;

	for (var i = 0; i < (numDigits / 2); i++) {
		if (digits[i] !== digits[numDigits-i-1]) {
			isPalindrome = false;
			break;
		}
	}

	return isPalindrome;

};

// Expose the object
exports.Palindrome = Palindrome;
