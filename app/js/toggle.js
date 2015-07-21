'use strict';

module.exports = () => {
	function hasClassName(el, className) {
		let regExp = new RegExp('' + className);
		return regExp.test('' + el.className);
	}

	function show(el, className) {
		el.classList.add(className);
	}

	function hide(el, className) {
		el.classList.remove(className);
	}

	return function (el, className) {
		hasClassName(el, className) ? hide(el, className) : show(el, className);											
	};
};