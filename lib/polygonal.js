var Algorithm = require('./algorithm');

/**
 * @constructor
 * @class Polygonal
 */
var Polygonal = function() {
  Algorithm.call(this);
};

Polygonal.prototype = new Algorithm();

/**
 * @method triangle
 * @param {Number} n
 * @return {Number}
 * @public
 */
Polygonal.prototype.triangle = function(n) {
  return (n*(n+1))/2;
};

/**
 * @method square
 * @param {Number} n
 * @return {Number}
 * @public
 */
Polygonal.prototype.square = function(n) {
  return n*n;
};

/**
 * @method pentagonal
 * @param {Number} n
 * @return {Number}
 * @public
 */
Polygonal.prototype.pentagonal = function(n) {
  return (n*((3*n)-1))/2;
};

/**
 * @method hexagonal
 * @param {Number} n
 * @return {Number}
 * @public
 */
Polygonal.prototype.hexagonal = function(n) {
  return n*((2*n)-1);
};

/**
 * @method heptagonal
 * @param {Number} n
 * @return {Number}
 * @public
 */
Polygonal.prototype.heptagonal = function(n) {
  return (n*((5*n)-3))/2;
};

/**
 * @method octagonal
 * @param {Number} n
 * @return {Number}
 * @public
 */
Polygonal.prototype.octagonal = function(n) {
  return n*((3*n)-2);
};

module.exports = Polygonal;
