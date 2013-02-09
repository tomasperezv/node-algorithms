/**
 * Common functionality can be placed here.
 *
 * @class {Algorithm}
 */

Algorithm = function() {

	this.identifier = 'base-algorithm';
	this.start = process.hrtime();
	this.total = 0;
	this.stopIteration = false;

};

/**
 * @method toString
 * @public
 */

Algorithm.prototype.toString = function() {
	return this.identifier + ' - total: ' + this.total + ', time: ' + this.getElapsed() + ' ms';
};

/**
 * @method check
 * @public
 */

Algorithm.prototype.check = function(expected) {

	var self = this;

	return {
		toString: function() {
			return self.toString() + ' => ' + (expected === self.total ? 'Check Ok.' : 'Check Failed.');
		}
	};

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
 * Stop the current iteration.
 *
 * @method stop
 * @public
 */

Algorithm.prototype.stop = function() {
	this.stopIteration = true;
};

/**
 * Simple abstraction of an iteration.
 *
 * You can seen an example of usage in ./problems/multiples.js
 *
 * @param {Object} params
 * 	{Integer} params.limit
 * 	{Integer} start
 * 	{Boolean} reverse
 * 	{Function} params.onEach
 * @method iterate
 * @public
 */

Algorithm.prototype.iterate = function(params) {

	var self = this;

	this.stopIteration = false;

	return {
		onEach: function(onEach) {

			if (self.value(params).isArray()) {

				// Iterate on the elements of the array
				for (var key in params) {

					if (self.stopIteration) {
						break;
					}

					if (params.hasOwnProperty(key)) {
						onEach.bind(self, new Value(params[key], key))();
					}

				}

			} else {

				// Normal range iteration
				if (typeof params.start === 'undefined') {
					params.start = 0;
				}

				if (typeof params.reverse === 'undefined') {
					params.reverse = false;
				}

				if (typeof params.end !== 'undefined') {
					params.limit = params.end + 1;
				}

				// Infinite loop, should require stop in
				// a onForEach callback.
				if (typeof params.limit === 'undefined') {
					params.limit = (Number.MAX_VALUE + 1);
				}

				if (!params.reverse) {
					for (var i = params.start; i < params.limit; i++) {

						if (self.stopIteration) {
							break;
						}

						onEach.bind(self, new Value(i), i)();
					}
				} else {

					for (var i = params.limit-1; i > 0 ; i--) {

						if (self.stopIteration) {
							break;
						}

						onEach.bind(self, new Value(i), i)();
					}

				}

			}
		}
	};

};

// Expose the object
exports.Algorithm = Algorithm;