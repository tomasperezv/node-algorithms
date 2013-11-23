/**
 * Algorithm to determine if a number is prime.
 *
 * @param {Boolean} useCache
 * @class Prime
 */

Prime = function(useCache) {

  if (typeof useCache === 'undefined') {
    useCache = false;
  }

	Algorithm.call(this);

  if (useCache) {
    this.cache = [];
  }

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

  var result = true;

	if (integer < 0) {
		integer = Math.abs(integer);
  }

  if (this.cache && typeof this.cache[integer] !== 'undefined') {
    return this.cache[integer];
  }

	if (integer === 1) {
		result = false;
	} else if (this.value(integer).isMultiple(2)) {
		result = false;
	} else if (integer !== 3 && this.value(integer).isMultiple(3)) {
		result = false;
	} else {

		var limit = Math.floor(Math.sqrt(integer));

		for (var i = 5; i <= limit; i+=6) {

			if (integer % i === 0) {
				result = false;
        break;
			} else if (integer % (i+2) === 0) {
				result = false;
        break;
			}
		}
	}

  if (this.cache) {
    this.cache[integer] = result;
  }

	return result;

};

// Expose the object
exports.Prime = Prime;
