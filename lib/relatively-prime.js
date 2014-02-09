/**
 * Two integers are relatively prime if they share no common positive 
 * factors (divisors) except 1.
 *
 * @class RelativelyPrime
 */

RelativelyPrime = function() {

  Algorithm.call(this);

  this._cache = {};

  require('./factors');
  this._factorsAlgorithm = new Factors();

};

RelativelyPrime.prototype = new Algorithm();

/**
 * @param {Number} n
 * @method _computeFactors
 * @return {Array}
 * @private
 */
RelativelyPrime.prototype._computeFactors = function(n) {

  // Get the factors from the cache system
  var nFactors = [];
  if (typeof this._cache[n] !== 'undefined') {
    nFactors = this._cache[n];
  } else {
    nFactors = this._factorsAlgorithm.solve(n);

    // Store the values in the cache for future usages
    this._cache[n] = nFactors;
  }

  return nFactors;

}

/**
 * @param {Integer} n 
 * @param {Integer} n 
 * @return {Boolean} True if n and m are relatively prime.
 * @method solve
 * @public
 */

RelativelyPrime.prototype.solve = function(n, m) {

  var isRelativelyPrime = true;

  if (n != m) {

    var nFactors = this._computeFactors(n);
    var mFactors = this._computeFactors(m);

    for (var i = 1; i < nFactors.length; i++) {
      for (var j = 1; j < mFactors.length; j++) {
        if (nFactors[i] == mFactors[j]) {
          isRelativelyPrime = false;
          i = nFactors.length;
          break;
        }
      }
    }

  }

  return isRelativelyPrime;

};

// Expose the object
exports.RelativelyPrime = RelativelyPrime;
