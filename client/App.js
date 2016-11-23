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
      navButton: '=',
      currentView: 'Intro'
    }
    this.changeView = this.changeView.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  changeView(view) {
    const newView = view;
    this.setState({currentView: newView})
  }

  toggleNav() {
    let newNavState = !this.state.navOpen;
    
    if (newNavState) {
      this.setState({navOpen: newNavState, navButton: 'x'})
    } else {
      this.setState({navOpen: newNavState, navButton: '='})
    }
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
        <div id="intro-bg"></div>
	    	<NavButton changeView={this.changeView} toggleNav={this.toggleNav} navText={this.state.navButton} />
        <NavPage key="4" changeView={this.changeView} toggleNav={this.toggleNav} navOpen={this.state.navOpen} />
				{currentView}
	    </div>
    )
  }
}

