
/**
 * Common functionality can be placed here.
 *
 * @class {Algorithm}
 */
Algorithm = function() {

	this.identifier = 'base-algorithm';
	this.start = process.hrtime();

};

/**
 * @method resetInterval
 * @public
 */

Algorithm.prototype.resetInterval = function() {
	this.start = process.hrtime();
};

/**
 * @method getElapsed
 * @return {Integer} The time in milliseconds since we start the interval
 * @public
 */
Algorithm.prototype.getElapsed = function() {
	var elapsed = process.hrtime(this.start)[1] / 1000000;
	return elapsed.toFixed(3);
};

/**
 * @method getIdentifier
 * @public
 */

Algorithm.prototype.getIdentifier = function() {
	return this.identifier;
};

/**
 * Allow to construct semantic instructions like
 * this.value(5).isMultiple(10), in combination with
 * the class Value.
 *
 * @see ./lib/value.js
 * @method value
 * @public
 */

Algorithm.prototype.value = function(value) {
	return new Value(value);
};

/**
 * Simple abstraction of an iteration.
 *
 * You can seen an example of usage in ./problems/multiples.js
 *
 * @param {Object} params
 * 	{Integer} params.limit
 * 	{Integer} start
 * 	{Function} params.onEach
 * @method iterate
 * @public
 */

Algorithm.prototype.iterate = function(params) {

	var self = this;

	return {
		onEach: function(onEach) {

			if (self.value(params).isArray()) {

				// Iterate on the elements of the array
				for (var key in params) {
					if (params.hasOwnProperty(key)) {
						onEach.bind(self, new Value(params[key]))();
					}
				}

			} else {

				// Normal range iteration
				if (typeof params.start === 'undefined') {
					params.start = 0;
				}

				for (var i = params.start; i < params.limit; i++) {
					onEach.bind(self, new Value(i))();
				}

			}
		}
	};

};

// Expose the object
exports.Algorithm = Algorithm;
