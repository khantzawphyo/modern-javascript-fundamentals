'use strict';

var foo = 42; // function scope
foo = 43;

let bar = 42; // block scope
bar = 43;

const baz = 42; // block scope (can't be reassigned)
baz = 43;

console.log('Still Working!');