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

	if(window.location.pathname.slice(1) === '') {
		activePage = '';
	}

  return (
    <div onClick={props.toggleNav} className='nav-button'>
    	{activePage}  <div className='main-nav-button'>{buttonText}</div>
    </div>
  )
}