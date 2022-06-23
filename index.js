"use strict";

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('#first');

const btn = document.createElement('button');
btn.classList.add('red');

wrapper.append(btn);

console.log(btns);
console.log(wrapper);

//console.log(button[1].classList.add('red'));
//console.log(button[1].classList.remove('blue'));
//console.log(button[1].classList.toggle('blue'));
/*
btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
     or
    
    if (!btns[1].classList.contains("red")) {
        btns[1].classList.add("red")
    } else {
        btns[1].classList.remove('red')
    }
    
})
*/
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        if (!event.target.classList.contains("red")) {
            event.target.classList.add("red")
        } else {
            event.target.classList.remove('red')
        }
    }
})















