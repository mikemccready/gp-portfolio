// NavPage.js
import React from 'react';
import { Link } from 'react-router';

const openStyle = {
	left: '0vw',
};

const closedStyle = {
	left: '100vw',
};

export default function NavPage(props) {

	let isOpen = props.navOpen;
	let navStyle;

	if(isOpen) {
		navStyle = openStyle;
	} else {
		navStyle = closedStyle;
	}

  return (
    <div style={navStyle} className="nav-page">
    	<div className="nav-flex-container">
	    	<h2 className='nav-page-item'><Link to="/work" onClick={props.toggleNav}>Work</Link></h2>
	    	<h2 className='nav-page-item'><Link to="/contact" onClick={props.toggleNav}>Contact</Link></h2>
	    	<h2 className='nav-page-item'><Link to="/experience" onClick={props.toggleNav}>Experience</Link></h2>
    	</div>
    </div>
  )
}