// Experience.js
import React from 'react';

export default class Experience extends React.Component {
	render() {
		return (
			<div className="experience-page">
				<h1>MIKE McCREADY</h1>
				<a href="https://github.com/mikemccready" target="_blank">
					<div className="work-icons">
						<div className="work-icon git"></div>
						<h5>github</h5>
					</div>
				</a>
				<a href="https://www.linkedin.com/in/mmccready" target="_blank">
					<div className="work-icons">
						<div className="work-icon linked"></div>
						<h5>linkedin</h5>
					</div>
				</a>
				<h3>TECHNICAL SKILLS</h3>
				<p>Javascript, React, Angular, SASS/LESS, Express, Node, MongoDB, Ruby on Rails, Github, Webpack, Gulp, Socket.io, Firebase, PostgreSQL, Heroku, AmazonS3</p>
				
				<h3>EXPERIENCE</h3>
				<h5>Software Engineer | Synthesis	2016</h5>
				<p>Developed a content-management system in javascript, with extensible architecture for React components.</p>
				<p>Utilized redux to store application plugins and pass state to dynamic components.</p>
				<p>Implemented command-line interface to help developers configure and launch the application.</p>
				<h5>Interactive Developer | Xaxis	2016</h5>
				<p>Architected an ad framework which renders dynamic assets and live copy from a CSV database, enabling Nordstrom account managers to create hundreds of ad variations without developer assistance.</p>
				<p>Created a template with responsive CSS and Javascript that generates a suite of size variations from one base ad unit.</p>
				<p>Engineered a programmatic creative campaign for FLOR, utilizing cookies to serve sequential messaging and give audiences a more focused ad each time an impression is viewed.</p>
				<p>Designed a CSV database for FLOR campaign to serve hundreds of image and copy variations from Amazon S3.</p>
				<p>Created a mobile interstitial lookbook framework for Nordstrom using client-side javascript and Hammer.js for touch interactions, allowed account managers to create new themes and swap out products without developer assistance.</p>
				<h5>Front-End Developer and User Interface Design | Inspero 	2015 - 2016</h5>
				<p>Overhauled an existing codebase to convert a desktop app into a mobile optimized app using responsive CSS.</p>
				<p>Utilized angular directives to create a more modular and maintainable codebase.</p>
				<p>Worked on a team of remote developers, with git and pivotal tracker.</p>
				<h5>Full-Stack Developer and User Experience Design | Teamspace	2015</h5>
				<p>Developed a full-stack Ruby on Rails application with PostgreSQL database.</p> 
				<p>Implemented Stripe API to enable customer subscriptions and payment.</p>
				<p>Designed wireframes and conducted user-surveys to optimize app functionality.</p>
				
				<h3>PROJECTS</h3>
				<h5>BeatCreep | Curated playlist and music box</h5>
				<p>Built web-scraper to extract song data from thousands of beatport DJ charts and rank by most charted songs.</p>
				<p>Used soundcloud API to provide audio playback and mongoDB to save favorites.</p>
				<h5>BuddyBeats | Collaborative drum sequencer</h5>
				<p>Enabled live collaboration between players with socket connections.</p>
				<p>Utilized web audio API to playback sequenced sounds and allow users to extend their sound library.</p>
				
				<h3>EDUCATION</h3>
				<p>Codesmith | Software Engineering Academy | Full-stack Javascript and Computer Science	2016</p>
				<p>UCLAx | Interaction Design | Responsive Development and User Experience	2013</p>
				<p>UCSB | Business Economics | Statistics, Game Theory, Micro and Macroeconomics	2005-2009</p>
			</div>
		)
	}
}