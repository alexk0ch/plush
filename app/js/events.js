'use strict';

let event = function (el, evt, cb) {
	if (typeof addEventListener === "function" ) {
		el.addEventListener(evt, cb, false);
	} else if (window.attachEvent) {
		el.attachEvent('on' + evt, cb);
	} else {
		el['on' + evt] = cb;
	}
};

module.exports = event;
