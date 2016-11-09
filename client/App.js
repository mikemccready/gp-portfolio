// App.js
import React from 'react';
require('./styles/App.scss');

import StatusBar from './components/StatusBar';
import NavButton from './components/NavButton';
import NavPage from './components/NavPage'

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	navOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
  	let navOpen = this.state.navOpen;
  	navOpen = !navOpen;
  	this.setState({navOpen: navOpen})
  }

  render() {
    return (
	    <div>
	    	<NavButton navOpen={this.state.navOpen} toggleNav={this.toggleNav} />
	    	<NavPage navOpen={this.state.navOpen} toggleNav={this.toggleNav} />
				{this.props.children}
				<StatusBar />
	    </div>
    )
  }
}

