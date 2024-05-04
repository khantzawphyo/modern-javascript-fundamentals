(
    function () {
        'use strict';

        const largeNum = 10000000000000;
        const largeNum2 = 1_000_000_000;
        const largeNum2 = largeNum + 1;
        console.log(largeNum + 1 === largeNum2); // true
        const weirdNum = 100_0;
        const myHex = 0xbad_a55;

        const oops = 10__0; // syntax error: multiple consective numeric separators are not allowed
    }
)();