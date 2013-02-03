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

	var isPrime = true;

	this.iterate({
		start: 2,
		limit: integer 
	}).onEach(function(current, pos) {
		if (this.value(integer).isMultiple(current.value)) {
			isPrime = false;
			// No need to continue checking other values
			this.stop();
		}
	});

	return isPrime;

};

// Expose the object
exports.Prime = Prime;
