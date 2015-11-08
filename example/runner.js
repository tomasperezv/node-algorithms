#!/usr/bin/env node

/**
 * Script to run the different algorithms.
 */
require('./lib/algorithm');
require('./lib/value');

var Multiples = require('./problems/multiples.js');

console.log(new Multiples().solve(1000, [3, 5]).check(233168).toString());
