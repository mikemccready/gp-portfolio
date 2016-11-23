// NavPage.js
import React from 'react';

const openStyle = {
  right: '0em'
};

const closedStyle = {
  right: '-35em'
};

export default function NavPage(props) {

  let navState;

  if (props.navOpen) {
    navState = openStyle;
  } else {
    navState = closedStyle;
  }

  return (
    <div className="nav-page" style={navState}>
    	<div className="nav-flex-container">
        <h2 className='nav-page-item' onClick={(e) => {props.toggleNav(); props.changeView('Intro')}}>Home</h2>
	    	<h2 className='nav-page-item' onClick={(e) => {props.toggleNav(); props.changeView('Work')}}>Work</h2>
	    	<h2 className='nav-page-item' onClick={(e) => {props.toggleNav(); props.changeView('Contact')}}>Contact</h2>
	    	<h2 className='nav-page-item' onClick={(e) => {props.toggleNav(); props.changeView('Experience')}}>Experience</h2>
    	</div>
    </div>
  )
}