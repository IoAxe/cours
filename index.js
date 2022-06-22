"use strict";
/*
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
*/

function isPangram(string) {
    let set = new Set();
    let arr = string.split(' ').join('').split('');
    arr.forEach(element => {
        set.add(element)
    });
    if (set.size >= 26) {
        return true;
    } else {
        return false;
    }
}



