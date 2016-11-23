import React from 'react';

export default function Intro(props) {
	// setTimeout(() => {
	// 	props.changeView('Work');
	// }, 4500);

  // setTimeout(() => {
  //   document.getElementById('intro-bg').style.opacity = '0';
  // }, 2500)

  setTimeout(() => {
    document.getElementsByClassName('intro-CPU')[0].src = "assets/img/cpu-on.jpg";
  }, 2500)

  setTimeout(() => {
    document.getElementsByClassName('intro-CPU')[0].src = "assets/img/cpu-off.png";
  }, 2650)

  setTimeout(() => {
    document.getElementsByClassName('intro-CPU')[0].src = "assets/img/cpu-on.jpg";
  }, 2750)

  return (
  	<div className="intro-page">
      <img className="intro-CPU" src="assets/img/cpu-off.png" />
  		<div className="intro-band">
  		  <h3>Software Development & Interaction Design</h3>
      </div>
  	</div>
  )
}