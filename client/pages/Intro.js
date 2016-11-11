import React from 'react';

export default function Intro(props) {
	setTimeout(() => {
		props.changeView('Work');
	}, 4500);

  setTimeout(() => {
    document.getElementById('intro-bg').style.opacity = '0';
  }, 2500)

  return (
  	<div className="intro-page">
      <div id="intro-bg"></div>
  		<div className="intro-band">
        <h1>MIKE McCREADY</h1>
  		  <h3>Software Development & Interaction Design</h3>
      </div>
  	</div>
  )
}