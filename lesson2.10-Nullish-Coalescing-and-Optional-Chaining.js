(function () {
    'use strict';
    
    let x = null;
    let y = x || 10; // y will be 10

    const count = 0;
    const num = count || 10; // num = 10

    const count = 0;
    const num = count ?? 10; // num = 10

    let obj;
    // obj.test; // TypeError

    obj?.test // undefined
})();