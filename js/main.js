(function() {


var mainContainer = document.querySelector('.main-container');
var lastScrollPosition = 0;

function loadTemplate() {

	var title = this.innerHTML;
	var req = new XMLHttpRequest();

	req.onload = function (e) {
		mainContainer.innerHTML = e.target.responseText;
	};
	req.open('GET', '../views/' + title + '.html', true);
	req.send();	

	document.querySelector('.bg').style.background = 'white';
	document.querySelector('.page-title').innerHTML = title;
	document.querySelector('nav').style.backgroundImage = 'url(assets/white-bg.jpg)';
	document.querySelector('nav').style.color = 'black';
	document.querySelector('.page-title').style.color = 'black';
	document.querySelector('.title-bar').style.backgroundImage = 'url(assets/white-bg.jpg)';

	window.scrollTo(0, 0);
}

function attachListeners() {
	var navLink = document.querySelectorAll('.nav-link');
	document.querySelector('#logo').addEventListener('click', goHome);
	window.onscroll = scrolledNav;		

	for (var i = 0; i < navLink.length; i++) {
	    navLink[i].addEventListener('click', loadTemplate);
	}
}

function goHome() {
	document.querySelector('.page-title').innerHTML = 'mimic';
	mainContainer.innerHTML = '';
	document.querySelector('.bg').style.backgroundImage = 'url(assets/bg2.jpg)';
	document.querySelector('nav').style.backgroundImage = 'url(assets/black-bg.jpg)';
	document.querySelector('nav').style.color = 'white';
	document.querySelector('.page-title').style.color = 'white';
	document.querySelector('.title-bar').style.backgroundImage = '';
}

function scrolledNav() {
    var newScrollPosition = window.scrollY;
    if (newScrollPosition < lastScrollPosition || newScrollPosition === 0){
        document.querySelector('.title-bar').style.top = "0em";
    }else{
        document.querySelector('.title-bar').style.top = "-5em";
    }
    lastScrollPosition = newScrollPosition;
}

(function go() {
	setTimeout(function() {
		document.querySelector('nav').className = 'main-nav anim';		
	}, 1000);

	attachListeners();
})();

})();
