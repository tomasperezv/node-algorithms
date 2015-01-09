var Algorithm = require('../lib/algorithm');

/**
 * @class Example
 */
Example = function() {
  Algorithm.call(this);
};

Example.prototype = new Algorithm();

/**
 * @param {Integer} limit
 * @method solve
 * @public
 */
Example.prototype.solve = function(limit) {

  this.resetInterval();

  var self = this;

  var multiples = [];

  this.iterate({
    start: 1,
    limit: limit
  }).onEach(function(current) {
    if (current.isMultiple()) {
      multiples.push(current.value);
    }
  });

  // Now we need to calculate the sum
  var totalSum = 0;

  this.iterate(multiples).onEach(function(current) {
    totalSum += current.value;
  });

  return this;

};
