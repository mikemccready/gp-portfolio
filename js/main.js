(function() {


var mainContainer = document.querySelector('.main-container');
var pageTitle = document.querySelector('.page-title');
var nav = document.querySelector('nav');
var lastScrollPosition = 0;

var getTemplate = function() {
	var title = this.innerHTML;
	return new Promise(function(resolve, reject) {
		var req = new XMLHttpRequest();
		req.open('GET', '../views/' + title + '.html', true);

		req.onload = function() {
			if(req.status === 200) {
				resolve(req.response)
			}
		}

		req.send();		
	}).then(function(res) {
		return loadTemplate(res, title);
	})
}	

var loadTemplate = function(res, title) {
	mainContainer.innerHTML = res;
	pageTitle.innerHTML = title;

	nav.style.backgroundImage = 'url(assets/white-bg.jpg)';
	nav.style.color = 'black';		

	pageTitle.style.color = 'black';
	document.querySelector('.title-bar').style.backgroundImage = 'url(assets/white-bg.jpg)';
	document.querySelector('.bg').style.background = 'white';

	window.scrollTo(0, 0);

	if(title === 'resume') {
		resumeListeners();
	}
}

function attachListeners() {
	document.querySelector('#logo').addEventListener('click', goHome);
	window.onscroll = scrolledNav;		

	var navLink = document.querySelectorAll('.nav-link');
	for (var i = 0; i < navLink.length; i++) {
	    navLink[i].addEventListener('click', getTemplate);
	}	
}

function resumeListeners() {
	var resumeHeader = document.querySelectorAll('.resume-section-head');
	for (var i = 0; i < resumeHeader.length; i++) {
	    resumeHeader[i].addEventListener('click', showSection);
	}
}

function showSection() {
	var section = this.innerHTML.toLowerCase();

	if(document.querySelector('.' + section).style.display !== 'block'){
		document.querySelector('.' + section).style.display = 'block';
	}else {
		document.querySelector('.' + section).style.display = 'none';		
	}
}

function goHome() {
	mainContainer.innerHTML = '';
	document.querySelector('.bg').style.backgroundImage = 'url(assets/bg2.jpg)';	

	nav.style.backgroundImage = 'url(assets/black-bg.jpg)';
	nav.style.color = 'white';	

	pageTitle.innerHTML = 'mimic';
	pageTitle.style.color = 'white';
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
		nav.className = 'main-nav anim';		
	}, 1000);

	attachListeners();
})();

})();
