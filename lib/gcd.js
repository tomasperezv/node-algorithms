/**
 * Compute the greatest common divisor of 2 numbers.
 *
 * @class GCD
 */

GCD = function() {
	Algorithm.call(this);
};

GCD.prototype = new Algorithm();

/**
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @method solve
 * @public
 */

GCD.prototype.solve = function(a, b) {

	if ( ! b) {
		return a;
	}

	return this.solve(b, a % b);

};
