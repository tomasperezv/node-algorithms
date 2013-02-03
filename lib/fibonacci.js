/**
 * @class Fibonacci
 */

Fibonacci = function() {
	Algorithm.call(this);
};

Fibonacci.prototype = new Algorithm();

/**
 * @param {Integer} limit
 * @param {Function} onEach
 * @method solve
 * @public
 */

Fibonacci.prototype.solve = function(limit, onEach) {

	this.resetInterval();

	var results = [];

	var fibonacci = 1;

	this.iterate({
		limit: limit+1
	}).onEach(function(current, pos) {
		if (pos === 0) {
			// Discard 0 value
		} else if (pos === 1 || pos === 2) {
			results[pos-1] = 1;
		} else {

			fibonacci = results[0] + results[1];

			results[0] = results[1];
			results[1] = fibonacci;

		}

		if (typeof onEach === 'function') {
			onEach(this.value(fibonacci), pos);
		}

	});

	return this.value(fibonacci);

};

// Expose the object
exports.Fibonacci = Fibonacci;
