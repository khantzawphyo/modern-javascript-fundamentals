'use strict';

let number = 12;
let oct = 0o77; // 63
let hex = 0x0011; // 17
let bin = 0b1100; // 12

let string = 'Hello'; 
let quotes = '"Hello", said the man';
let escaped = '"Oh no you didn\'t, said the woman';
let joined = 'wait' + 'what?';
let multiline = `this
string
has
line
breaks.`;

let multiline2 = 'this\nstring\nhas\nline\nbreaks.';


let yes = true;

let mySymbol = Symbol("my symbol");

let sym1 = Symbol("x");
let sym2 = Symbol("x");
console.log(sym1 === sym2);

let array = [5, 'something', true];
let array2 = new Array();
array[0] // 5

let obj = {
    num: 5,
    str: "Woohoo"
};

obj.num; // 5
obj['str']; // "Woohoo"