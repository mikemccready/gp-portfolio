// App.js
import React from 'react';
require('./styles/App.scss');

import Intro from './pages/Intro';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

import NavButton from './components/NavButton';
import NavPage from './components/NavPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	navOpen: false,
      currentView: 'Intro'
    }
    this.changeView = this.changeView.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  changeView(view) {
    const newView = view;
    this.setState({currentView: newView})
  }

  toggleNav(e) {
  	let navOpen = this.state.navOpen;
  	navOpen = !navOpen;
  	this.setState({navOpen: navOpen})
  }

  render() {
    let currentView;

    if (this.state.currentView === 'Intro') {
      currentView = <Intro key="0" changeView={this.changeView} />
    } else if (this.state.currentView === 'Work') {
      currentView = <Work key="1" />
    } else if (this.state.currentView === 'Contact') {
      currentView = <Contact key="2" />
    } else if (this.state.currentView === 'Experience') {
      currentView = <Experience key="3" />
    }

    return (
	    <div>
	    	<NavButton navOpen={this.state.navOpen} toggleNav={this.toggleNav} currentView={this.state.currentView} />
	    	<NavPage navOpen={this.state.navOpen} toggleNav={this.toggleNav} changeView={this.changeView} />
				{currentView}
	    </div>
    )
  }
}

