'use strict';

const toggle = require('./toggle');

let addEvent = require('./events'),
    picker = document.querySelector('.header__color-picker'),
    palette = document.querySelector('.header__picker');

addEvent(picker, 'click',  function (e) {
    if (!e.target.classList.contains('color-picker')) return false;
	
    toggle(palette, 'active');
    toggle(picker, 'shadow');
});
