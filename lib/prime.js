var Algorithm = require('./algorithm');
/**
 * Algorithm to determine if a number is prime.
 *
 * @param {Boolean} useCache
 * @class Prime
 */
var Prime = function(useCache) {

  if (typeof useCache === 'undefined') {
    useCache = false;
  }

  Algorithm.call(this);
  this.identifier = 'Prime';

  if (useCache) {
    this.cache = [];
    this.hits = 0;
    this.cacheHits = 0;
  }

};

Prime.prototype = new Algorithm();

Prime.prototype.preloadFromFile = function(filename, limit, onComplete) {

  var self = this;
  var stopped = false;
  var fs = require('fs'),
    readline = require('readline');

  var rd = readline.createInterface({
      input: fs.createReadStream(filename),
      output: process.stdout,
      terminal: false
  });

  rd.on('line', function(prime) {

    if (stopped) {
      return;
    }

    prime = parseInt(prime, 10);
    if (self.cache && typeof self.cache[prime] === 'undefined') {
      self.cache[prime] = true;
    }

    if (prime >= limit && typeof onComplete === 'function') {
      onComplete();
      stopped = true;
      rd.close();
    }

  });

};

/**
 * Pre-caches the list of primes between 1 and limit-1.
 *
 * @param {Integer} limit
 * @return {Object} primes
 * @method preload
 * @public
 */
Prime.prototype.preload = function(limit) {

  var primes = {};
  for (var i = 1; i < limit; i++) {
    if (this.solve(i)) {
      primes[i] = true;
    }
  }

  return primes;

};

/**
 * @param {Integer} value
 * @return {Boolean} isPrime
 * @return {Boolean} onlyCache
 * @method solve
 * @public
 */

Prime.prototype.solve = function(integer, onlyCache) {

	this.resetInterval();

  var result = true;

	if (typeof onlyCache === 'undefined') {
		onlyCache = false;
	}

	if (integer < 0) {
		integer = Math.abs(integer);
  }

  this.hits++;
  if (this.cache && typeof this.cache[integer] !== 'undefined') {
    this.cacheHits++;
    return this.cache[integer];
  } else if (onlyCache) {
		return false;
  }

	if (integer === 1) {
		result = false;
	} else if (integer !== 2 && this.value(integer).isMultiple(2)) {
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

  if (this.cache && typeof this.cache[integer] === 'undefined' && this.cache.length <= 69999992) {
    this.cache[integer] = result;
  }

	return result;

};

// Expose the object
module.exports = Prime;
