/**
 * Algorithm to determine if a number is prime.
 *
 * @class Prime
 */

Prime = function() {
	Algorithm.call(this);
};

Prime.prototype = new Algorithm();

/**
 * @param {Integer} value
 * @return {Boolean} isPrime
 * @method solve
 * @public
 */

Prime.prototype.solve = function(integer) {

	this.resetInterval();

	if (integer < 0) {
		integer = Math.abs(integer);
  }

	if (integer === 1) {
		return false;
	} else if (this.value(integer).isMultiple(2)) {
		return false;
	} else if (integer !== 3 && this.value(integer).isMultiple(3)) {
		return false;
	} else {

		var limit = Math.floor(Math.sqrt(integer));

		for (var i = 5; i <= limit; i+=6) {

			if (integer % i === 0) {
				return false;
			} else if (integer % (i+2) === 0) {
				return false;
			}
		}
	}

	return true;


};

// Expose the object
exports.Prime = Prime;
