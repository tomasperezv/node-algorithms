/**
 * Algorithm to determine if a number is pandigital
 *
 * @class Pandigital
 */

Pandigital = function() {
	Algorithm.call(this);
};

Pandigital.prototype = new Algorithm();

/**
 * @param {Number} candidate
 * @return {Boolean}
 * @method solve
 * @public
 */

Pandigital.prototype.solve = function(candidate) {

  if (typeof candidate === 'number') {
    candidate = '' + candidate;
  }

  if (candidate.length !== 9) {
    return false;
  }

  if (candidate.indexOf('0') !== -1) {
    return false;
  }

  var isPandigital = true;
  for (var i = 0; i < candidate.length; i++) {
    if (candidate.replace(candidate[i], '').indexOf(candidate[i]) !== -1) {
      isPandigital = false;
      break;
    }
  }

  return isPandigital;

};

// Expose the object
exports.Pandigital = Pandigital;
