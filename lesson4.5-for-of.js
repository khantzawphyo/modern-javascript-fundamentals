(function () {
    'use strict';

    let arr = [1, 2, 3];

    for (let val of arr) {
        console.log('the value is:', val);
    }

    let mySet = new Set();
    mySet.add("x").add("y").add("z");

    for (let val of mySet) {
        console.log('the value is:', val);
    }

    let myMap = new Map();
    myMap.set("a", 1).set("b", 2).set("c", 3);

    for (let val of myMap) {
        if (val[1] === '2') break;
        console.log(val[1]); // a b c

    }
})();
