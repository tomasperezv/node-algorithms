/**
 * Compute the factors of a number.
 *
 * @class Factors
 */

Factors = function() {

	Algorithm.call(this);

	this.table = {};

};

Factors.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @return {integer}
 * @method solve
 * @public
 */

Factors.prototype.solve = function(n) {

	this.resetInterval();

	this.total = [1];

	for (var i = n - 1; i >= 2; i--) {

		if (this.value(n).isMultiple(i)) {
			this.total.push(i);
		}

	}

	this.total.push(n);

	this.table[n] = this.total;

	return this.total;

};
