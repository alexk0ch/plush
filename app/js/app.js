(function() {

	var source = document.querySelector('#discussion-tempalate').innerHTML,
		template = Handlebars.compile(source),
		rightbox = document.querySelector('.right-box'),
		trigger = document.querySelector('.header__trigger'),
		menu = document.querySelector('.header__menu'),

    	data = {
	     	title: 'All discussions',
	     	discussions: [{
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Where should we have our Summer party this year?',
	     		latest: 'Zara Price',
	     		date: 'about ther year ago',
	     		replies: 5
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'This month movie reviews',
	     		latest: 'Joe Jeffries',
	     		date: 'about ther year ago',
	     		replies: 34
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Where should we have our Summer party this year?',
	     		latest: 'Zara Price',
	     		date: 'about ther year ago',
	     		replies: 5
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Where should we have our Summer party this year?',
	     		latest: 'Zara Price',
	     		date: 'about ther year ago',
	     		replies: 5
	     	},{
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}, {
	     		icon: 'http://placehold.it/40x40',
	     		message: 'Shopping and fashion advice',
	     		latest: 'Phillippa Rizvi',
	     		date: '3 month',
	     		replies: 1
	     	}]
     	};

     rightbox.innerHTML = template(data);

     trigger.addEventListener('click', function (e) {
     	e = e || window.event;
     	var target = e.target;
     	menu.style.display === "none" ? menu.style.display = 'block' : menu.style.display = "none";
     },false);

})();
