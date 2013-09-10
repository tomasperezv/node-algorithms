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
 * Return the ciclic permutations for the value
 * e.g. value = 123
 * => [123, 231, 312]
 *
 * @return {Array}
 * @method ciclicPermutations
 * @public
 */
Value.prototype.ciclicPermutations = function() {

  var permutations = [];
  var isDifferent = true;
  var current = this.value;

  while(isDifferent) {
    
    permutations.push(current);

    var currentDigits = new Value(current).getDigits().reverse();

    if (currentDigits.length < this.getDigits().length) {
      currentDigits.splice(0, 0, '0');
    }

    var current = currentDigits.splice(1);
    current = current.concat(currentDigits[0]);
    current = current.join('');
    current = parseInt(current, 10);

    if (permutations.indexOf(current) > -1) {
      isDifferent = false;
    }
  }

  return permutations;

};

/**
 * For the current value, it returns all the possible
 * combinations of its digits. 
 *
 * e.g. value = 123
 * => [123, 132, 213, 231, 312, 321]
 *
 * @return {Array}
 * @method combinations
 * @public
 */
Value.prototype.combinations = function() {

  var digits = this.getDigits();
  if (digits.length == 0) {
    return [];
  } else if (digits.length == 1) {
    return [parseInt(digits[0], 10)];
  } else {
      var nextResult = new Value(digits.splice(1).join('')).combinations();
      var firstDigit = parseInt(digits[0], 10);

      var result = [];

      for (var i = 0; i < nextResult.length; i++) {
        if (typeof nextResult[i].length === 'undefined') {
          nextResult = [nextResult];
        }
        result.push([firstDigit].concat(nextResult[i]))
        result.push(nextResult[i].concat(firstDigit)); 
        if (nextResult[i].length >= 2) {
          for (var j = 1; j < (nextResult[i].length); j++) {
            var tmp = nextResult[i].slice(0);
            tmp.splice(j, 0, firstDigit);
            result.push(tmp);
          }
        }
      }

     return result;
  }

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

/**
 * Return the factor i.e. n! = n * n-1 * n-2 * ... * 1
 * @return {bigNum}
 * @method factor
 * @public
 */
Value.prototype.factor = function() {

  var current = this.value;
  var bigNum = require('bignum');
  var result = bigNum(1);

  while (current >= 1) {
    result = result.mul(current);
    current--;
  }

  return result;

};

// Expose the object
exports.Value = new Value();
