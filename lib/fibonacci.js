/**
 * Algorithm to obtain Fibonacci.
 *
 * @class Fibonacci
 */

var bigInt = require("big-integer");

Fibonacci = function() {

	Algorithm.call(this);

	this.table = {
		1: bigInt(1),
		2: bigInt(1)
	};

};

Fibonacci.prototype = new Algorithm();

/**
 * @param {Integer} n
 * @return {Integer} fibonacci
 * @method solve
 * @public
 */

Fibonacci.prototype.solve = function(n) {

	this.resetInterval();

	if (typeof this.table[n] !== 'undefined') {
		return this.table[n];
	} else if (typeof this.table[n-1] !== 'undefined' && this.table[n-2] !== 'undefined') {
		this.table[n] = this.table[n-1].plus(this.table[n-2]);
	} else {
		for (var i = 3; i <= n; i++) {
			this.table[i] = this.table[i-1].plus(this.table[i-2]);
		}
	}

	return this.table[n].toString();

};
