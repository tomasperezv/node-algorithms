/**
 * @class Value
 * @param {Integer} value
 * @class {Number}
 */

Value = function(value) {
	this.value = value;
};

/**
 * @param {?} value
 * @method isArray
 * @public
 */

Value.prototype.isArray = function(value) {

	if (typeof value === 'undefined') {
		var value = this.value;
	}

	return value.constructor.toString().indexOf('Array') > -1;

};

/**
 * @param {Integer} multipleOf
 * @method isMultiple
 * @return {Boolean}
 */

Value.prototype.isMultiple = function(multipleOf) {

	if ( this.isArray(multipleOf) ) {

		var self = this;

		var isMultiple = false;

		var checkMultiples = new Algorithm();

		checkMultiples.iterate(multipleOf).onEach(function(current) {
			if (self.isMultiple(current.value)) {
				isMultiple = true;
				this.stop();
			}
		});

		return isMultiple;

	} else  {
		return (this.value % multipleOf === 0);
	}


};

/**
 * @return {Boolean} Is the number prime?
 * @method isPrime
 */

Value.prototype.isPrime = function() {

	require('../lib/prime');

	return new Prime().solve(this.value);

};

/**
 * @return {Boolean}
 * @method isEven
 * @public
 */

Value.prototype.isEven = function() {
	return this.isMultiple(2);
};

/**
 * Count the digits of a number.
 * @method digits
 * @public
 */

Value.prototype.digits = function() {
	return (1 + Math.floor(Math.log(this.value)/Math.log(10)));
};

/**
 * Returns an array of integers corresponding to the digits of the
 * current value.
 *
 * e.g. value = 3456
 * value.digits() => [6, 5, 4, 3]
 *
 * @return {Array}
 * @method getDigits
 * @public
 */

Value.prototype.getDigits = function() {

	return new String(this.value).split('').reverse();

};

/**
 * Sum the digits of a Value. e.g. 1234 => 10
 * @param {Function} operation Optional callback to apply on the values
 * @return {Value}
 * @method addDigits
 * @public
 */

Value.prototype.addDigits = function(operation) {

	var digits = this.getDigits();
	var total = 0;

	for (var i = 0; i < digits.length; i++) {

		var result = parseInt(digits[i], 10);
		// Apply the callback, if needed
		if (typeof operation === 'function') {
			result = operation(result);
		}

		total += result;

	}

	return new Value(total);

};

/**
 * @return {Boolean}
 * @method isPalindrome
 * @public
 */

Value.prototype.isPalindrome = function() {

	require('../lib/palindrome');

	return new Palindrome().solve(this.value);

};

/**
 * @return {Value}
 * @method times
 * @public
 */

Value.prototype.times = function(n) {
	return new Value(Math.pow(this.value, n));
};

// Expose the object
exports.Value = new Value();
