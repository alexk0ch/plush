'use strict';

const on = require('./events');

let input = document.querySelector('.right-box__search'),
	dom = document.querySelectorAll(".right-box__questions-item"),
	domMap = [].slice.call(dom).map(function (elem) {
		return {
			elem: elem,
			text: elem.textContent.replace(/[\n\t\r]?/gi, "")
		}
	});

let search = function (query) {
	let m = query.match(/\w+/i);
	let searchQuery = new RegExp((m && m[0]) || "", "i");
					
	domMap.filter((search_obj) => {
		searchQuery.test(search_obj.text)
			? search_obj.elem.style.display = "block"
			: search_obj.elem.style.display = "none";
	});
};

on(input, 'keyup', function (e) {
	e = e || window.e;
	search(this.value);
});
