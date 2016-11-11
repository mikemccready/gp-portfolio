// NavButton.js
import React from 'react';

export default function NavButton(props) {
	let activePage = window.location.pathname.slice(1) + '  | ';
	let isOpen = props.navOpen;
	let buttonText;

	if(!isOpen) {
		buttonText = 'menu';
	} else {
		buttonText = 'close';
	}

	setTimeout(() => {
    	document.getElementsByClassName('nav-button')[0].style.opacity = '1';
  	}, 5000)

	return (
		<div onClick={props.toggleNav} className='nav-button'>
			<div className='main-nav-button'>{buttonText}</div>
		</div>
	)
}