// NavPage.js
import React from 'react';

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
	    	<h2 className='nav-page-item' onClick={(e) => {props.toggleNav(e); props.changeView('Work')}}>Work</h2>
	    	<h2 className='nav-page-item' onClick={(e) => {props.toggleNav(e); props.changeView('Contact')}}>Contact</h2>
	    	<h2 className='nav-page-item' onClick={(e) => {props.toggleNav(e); props.changeView('Experience')}}>Experience</h2>
    	</div>
    </div>
  )
}