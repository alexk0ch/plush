'use strict';

const toggle = require('./toggle');

let addEvent = require('./events'),
	picker = document.querySelector('.header__color-picker'),
	palette = document.querySelector('.header__picker');

let _hasClass = function (el, className) {
	let regExp = new RegExp(className);
	return regExp.test(el.className);
};

addEvent(picker, 'click',  function (e) {
	e = e || window.event;
	var target = e.target;
	if (_hasClass(target, 'color-picker')) {
		toggle(palette, 'active');
		toggle(picker, 'shadow');
	}
});

