(function() {


var mainContainer = document.querySelector('.main-container');
var workTemplate = '<div class="work-container"><div class="work"><div class="works-mobile-mock"><img src="./assets/sotps_mock.png"></div><div class="works-desc"><h2 class="works-ttl"><a href="https://sotps.herokuapp.com/" target="_blank">SUM OF THE PARTS</a></h2><h4>Idea Accelerator built with Ruby on Rails and Foundation</h4><ul> <li>Facebook OmniAuth</li><li>Stripe Integration</li><li>Amazon S3</li><li>Responsive & Mobile Optimized</li><li>Heroku Deployed</li><li>PostgreSQL Database</li></ul></div></div><div class="work"><div class="works-mobile-mock"><img src="./assets/appty_mock.png"></div><div class="works-desc"><h2 class="works-ttl"><a href="http://apptyapp.herokuapp.com/" target="_blank">APPTY</a></h2><h4>Appointment booking with Ruby on Rails and Bootstrap</h4><ul> <li>Google OmniAuth</li><li>Google Calendar API Integration</li><li>Responsive & Mobile Optimized</li><li>Heroku Deployed</li><li>PostgreSQL Database</li></ul></div></div><div class="work"><div class="works-mobile-mock"><img src="./assets/gtd_mock.png"></div><div class="works-desc"><h2 class="works-ttl"><a href="https://getthatdough.firebaseapp.com/" target="_blank">GET THAT DOUGH</a></h2><h4>Tic-Tac-Toe game built with Angular.js and Firebase</h4><ul> <li>Real-time gameplay on multiple devices</li><li>CSS animation</li><li>Responsive & Mobile Optimized</li><li>Firebase Application</li></ul></div></div><div class="work"><div class="works-responsive-mock"><img src="./assets/KILOSResponsive.png"></div><div class="works-desc"><h2 class="works-ttl"><a href="./assets/pdf/MMcCreadyKilosResponsiveUX.pdf" target="_blank">KILOS UX</a></h2><h4>Lo-fi Ecommerce site mockup</h4><ul> <li>Responsive Design</li><li>Built with Adobe Photoshop, Illustrator and Indesign</li></ul></div></div></div>';
var resumeTemplate = '<div class="resume"><h1>MIKE McCREADY</h1><section><h3>SKILLS</h3><div class="skills"><h5>Full Stack Development</h5><p>Javascript, AngularJS, jQuery, Ruby on Rails, HTML5 and CSS3</p><p>Database design with Firebase, Postgresql, and MongoDB.</p><p>Front-End technologies including Bootstrap, Foundation, AngularMaterial, and LESS.</p><p>Heroku Deployment, Github | Version Control, Amazon S3, and Pivotal Tracker.</p><h5>Visual & Interactive Design</h5><p>Responsive Design, Mobile Optimized Applications, User Experience</p><p>Photoshop, Illustrator, Indesign</p></div></section><section><h3>EXPERIENCE</h3><div class="experience"><h5>Inspero</h5><p>Front-end Developer & User Interface Design | Nov. 2015 - Present</p><p>Designed and developed elements from wireframe sketches to mockups to production features.</p><p>Reworked existing features to improve user flow and function.</p><p>Created and implemented fully responsive interfaces to maximize usability <p>across all devices.</p><h5>Rhubarb Studios</h5> <p>Full Stack Developer & User Experience Design | Aug. 2015 - Oct. 2015</p><p>Developed a web application to connect entreprenuers with workspaces.</p><p>Conducted user testing to improve app function and design.</p><p>Practiced AGILE development to rapidly add new features and accelerate work flow.</p><h5>Independent Designer</h5><p>Sept. 2014 - Present</p><p>Designed mobile and web applications.</p><p>Developed cohesive brand identities including logos, color-scheme, typography, and collateral.</p><h5>Coalition Technologies</h5> <p>Design Intern | Oct. 2014 - Dec. 2014</p><p>Designed wireframes and mockups for client websites.</p><p>Developed client branding including engaging ads and web banners for promotions.</p></div></section><section><h3>EDUCATION</h3><div class="education"><h5>General Assembly</h5> <p>Web Development Immersive | Graduated July 2015</p><p>Intensive full stack development bootcamp.</p><h5>Harvard Extension</h5> <p>Intensive Introduction to Computer Science | Completion Dec. 2015</p><p>Subjects covering software engineering and web development,including programming with C, PHP, and JavaScript plus SQL.</p><h5>University of California Los Angeles Extension</h5> <p>Advanced Interactive Design | Graduated March 2015</p><p>Subjects covering branding/corporate identity, advertising, typography, strategic marketing,responsive web design, and user experience.</p><h5>University of California Santa Barbara</h5> <p>Bachelor of Business Economics | Graduated June 2009</p><p>Coursework including Microeconomic & Macroeconomic Theory, Financial Management, and Professional Writing.</p></div></section></div>'
var contactTemplate = '<form action=https://formspree.io/michaeljmccready@gmail.com autocomplete=on method=POST><input name=_next type=hidden value=/ > <input name=_subject type=hidden value="MIMIC mail"><label for=name><span class=form-label>Name</span> <input name=name placeholder="Introduce yourself!"required></label><label for=email><span class=form-label>Email</span> <input name=_replyto type=email placeholder=me@myself.com required></label><label for=details><span class=form-label>Details</span><textarea name=details required type=text></textarea></label><input id="form-submit" type=submit value=Send></form>'
var lastScrollPosition = 0;

function loadTemplate() {
	var title = this.innerHTML;
	var template = eval(title + 'Template');

	document.querySelector('.bg').style.background = 'white';
	document.querySelector('.page-title').innerHTML = title;
	mainContainer.innerHTML = template;
	document.querySelector('nav').style.backgroundImage = 'url(assets/white-bg.png)';
	document.querySelector('nav').style.color = 'black';
	document.querySelector('.page-title').style.color = 'black';
	document.querySelector('.title-bar').style.backgroundImage = 'url(assets/white-bg.png)';

	window.scrollTo(0, 0);
}

function attachListeners() {
	var navLink = document.querySelectorAll('.nav-link');

	for (var i = 0; i < navLink.length; i++) {
	    navLink[i].addEventListener('click', loadTemplate);
	}

	document.querySelector('#logo').addEventListener('click', function() {
		document.querySelector('.page-title').innerHTML = 'mimic';
		mainContainer.innerHTML = '';
		document.querySelector('.bg').style.backgroundImage = 'url(assets/bg2.jpg)';
		document.querySelector('nav').style.backgroundImage = 'url(assets/black-bg.png)';
		document.querySelector('nav').style.color = 'white';
		document.querySelector('.page-title').style.color = 'white';
		document.querySelector('.title-bar').style.backgroundImage = '';		
	})

	window.onscroll = function() {
	    var newScrollPosition = window.scrollY;

	    if (newScrollPosition < lastScrollPosition){
	        document.querySelector('.title-bar').style.top = "0em";
	    }else{
	        document.querySelector('.title-bar').style.top = "-5em";
	    }
	    lastScrollPosition = newScrollPosition;
	}
}

function go() {

	setTimeout(function() {
		document.querySelector('nav').className = 'main-nav anim';		
	}, 1000);

	attachListeners();
}

go();



})();