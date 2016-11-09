import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class Intro extends React.Component {
  render() {
  	let redirectMain = setTimeout(() => {
  		browserHistory.push('/work');
  	}, 10000);

    let fadeBg = setTimeout(() => {
      document.getElementById('intro-bg').style.opacity = '0';
    }, 3500)

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
}