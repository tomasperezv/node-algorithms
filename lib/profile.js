/**
 * Store information related with program execution profiling.
 * @class {Profile}
 */
var Profile = {

  /**
   * Static variable to store performance information.
   *
   * @type {Object} {_performance}
   * @static
   * @private
   */
  _performance: {
    count: {}
  },

  /**
   * @method count
   * @param {String} id
   * @public
   */
  count: function(id) {
    if (typeof this._performance.count[id] === 'undefined') {
      this._performance.count[id] = 0;
    }
    this._performance.count[id]++;
  }

};

module.exports = Profile;
