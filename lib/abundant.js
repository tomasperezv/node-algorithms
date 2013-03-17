/**
 * A number is abundant if the sum of its proper divisors exceeds the
 * value of the original number.
 *
 * e.g. n = 12 => 1 + 2 + 3 + 4 + 6 = 16 > 12
 *
 * @class Abundant
 */

Abundant = function() {
	Algorithm.call(this);
};

Abundant.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @return {Boolean}
 * @method solve
 * @public
 */

Abundant.prototype.solve = function(n) {

	this.total = 0;

	require('./proper-divisors');

	var properDivisors = new ProperDivisors().solve(n);

	this.iterate({start:0, end: properDivisors.length-1}).onEach(function(current) {
		this.total += properDivisors[current.value];
	});

	return (this.total > n);

};
