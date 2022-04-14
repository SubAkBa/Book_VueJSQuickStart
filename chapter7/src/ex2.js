let msg = 'GLOBAL';

function outer(a) {
    let msg = 'OUTER';

    console.log(msg);

    if (true) {
        let msg = 'BLOCK';
        console.log(msg);
    }
}

'use strict';

var msg = 'global';
function outer(a) {
    var msg = 'outer';

    console.log(msg);

    if (true) {
        var _msg = 'BLOCK';
        console.log(_msg);
    }
}