"use strict";
function amountOfPages(summary) {
    let str = "";
    let value = 0;
    for (let i = 1; i <= summary; i++) {
        value += 1;
        str += value;
        if (str.length == summary) {
            return value
        }
    }
    return value;
}
