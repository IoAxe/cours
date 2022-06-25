"use strict";
const btn = document.querySelector('.but');
btn.addEventListener('click', myAnimation);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const timerId = setInterval(frame, 0)



    function frame() {
        if (pos === 300) {
            clearInterval(timerId);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}










