'use strict';

require('./lib/colorpicker.min.js');

ColorPicker(
    document.querySelector('.header__picker'),
	function(hex, hsv, rgb) {
        document.body.style.backgroundColor = hex;
    	localStorage.color = hex;
});
