/**
 * Two integers are relatively prime if they share no common positive 
 * factors (divisors) except 1.
 *
 * @class RelativelyPrime
 */

RelativelyPrime = function() {
  Algorithm.call(this);
};

RelativelyPrime.prototype = new Algorithm();

/**
 * @param {Integer} n 
 * @param {Integer} n 
 * @return {Boolean} True if n and m are relatively prime.
 * @method solve
 * @public
 */

RelativelyPrime.prototype.solve = function(n, m) {

  require('./factors');
  var factorsAlgorithm = new Factors();

  var nFactors = factorsAlgorithm.solve(n);
  var mFactors = factorsAlgorithm.solve(m);

  var isRelativelyPrime = true;

  for (var i = 1; i < nFactors.length; i++) {
    for (var j = 1; j < mFactors.length; j++) {
      if (nFactors[i] == mFactors[j]) {
        isRelativelyPrime = false;
        i = nFactors.length;
        break;
      }
    }
  }

  return isRelativelyPrime;

};

// Expose the object
exports.RelativelyPrime = RelativelyPrime;
