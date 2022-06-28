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
/*
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
*/

/*
// Вариант с циклом
function deepCount(a) {
    let count = a.length;
    for (let i = 0; i < a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}
/*
// Вариант с методом reduce
function deepCount(a) {
    return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}
*/



const box = document.querySelector('.box');
const btnClick = document.querySelector('button');

btnClick.addEventListener('click', changeWidth);

function changeWidth() {
    box.style.height = box.scrollHeight + 'px';
}

console.log(box.getBoundingClientRect());
