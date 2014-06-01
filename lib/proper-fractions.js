/**
 * Compute the proper fractions of a number d
 *
 * A positive fraction whose numerator is less than its denominator
 * is called a proper fraction. For any denominator, d, there will be
 * d−1 proper fractions; for example, with d = 12
 *
 * 1/12 , 2/12 , 3/12 , 4/12 , 5/12 , 6/12 , 7/12 , 8/12 , 9/12 , 
 * 10/12 , 11/12
 *
 *
 * @class ProperFractions
 */

ProperFractions = function() {
	Algorithm.call(this);
};

ProperFractions.prototype = new Algorithm();

/**
 * @param {Integer} d
 * @return {integer}
 * @method solve
 * @public
 */

ProperFractions.prototype.solve = function(d) {

	var ProperFractions = [];

	this.iterate({start:1, end: d-1}).onEach(function(current) {
		ProperFractions.push([current.value, d]);
	});

	return ProperFractions;

};
