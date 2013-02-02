#!/usr/bin/env node

/**
 * Script to run the different algorithms.
 */

require('./lib/algorithm');
require('./lib/value');
require('./problems/example.js');

console.log(new Example().solve(1000, [3, 5]).toString());
