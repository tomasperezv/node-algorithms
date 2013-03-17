Algorithms
============
A node.js library to implement algorithms providing a semantic way.

Used to solve project-euler and topcoder problems.

Examples

    var testAlgorithm = new Algorithm();
  
    testAlgorithm.prototype.solve = function(limit, multipleOf) {
    
      var multiples = [];
  
      this.iterate({
        start: 1,
        limit: limit
       }).onEach(function(current) {
        if (current.isMultiple(multipleOf)) {
          multiples.push(current.value);
        }
      });
    
    }
    ...
    ...
    console.log(new testAlgorithm().solve(1000, [3, 5]).toString());

Dependencies
	big-integer: an arbitrary-length integer library for Javascript. 
	https://github.com/peterolson/BigInteger.js
