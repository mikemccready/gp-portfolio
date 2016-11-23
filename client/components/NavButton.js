// NavButton.js
import React from 'react';

export default function NavButton(props) {

	setTimeout(() => {
    	document.getElementsByClassName('nav-button')[0].style.opacity = '1';
  	}, 3500)

	return (
		<div className='nav-button' onClick={props.toggleNav}>{props.navText}</div>
	)
}