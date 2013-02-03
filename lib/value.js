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
			}
		});

		return isMultiple;

	} else  {
		return (this.value % multipleOf === 0);
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

// Expose the object
exports.Value = new Value();
