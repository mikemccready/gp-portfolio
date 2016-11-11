// Work.js
import React from 'react';
import WorkSection from '../components/WorkSection'

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	workSections: [
    		{
    			title: 'Synthesis',
    			description: 'Extensible React Content Management Framework.',
          gitUrl: 'https://github.com/synthesis-js/react-synthesis',
          detail: 'Synthesis is a CMS built with Mongo, Express, React and Node. What makes Synthesis unique is the ability for users to customize and extend the base application with plugin-components from our plug-in store. Technologies and features include: Redux, React Router, User Authentication, and Command-Line Interface to configure the application and setup additional plugins.'
    		},
    		{
    			title: 'BeatCreep',
    			description: 'Curated playlist and music box.',
          gitUrl: 'https://github.com/mikemccready/beatcreep-react',
          detail: 'BeatCreep is a curated music player. Playlists are compiled by webscrapers that gather song data from thousands of beatport.com DJ charts and rank by most charted songs. Users can then playback songs in app, using the SoundCloud API. Built with Mongo, Express, React, Node, and Cheerio.'
    		},
    		{
    			title: 'Buddy Beats',
    			description: 'Collaborative drum sequencer.',
          gitUrl: 'https://github.com/Buddy-Beats-Iteration/buddy_beats',
          detail: 'Buddy Beats is a collaborative drum machine. A user can make a song on their own or join another producer for real-time collaborative beat-making using web socket connections. Built with Mongo, Express, React, Node, Socket.io, and Web Audio API.'
    		}
    	],
    	sectionIndex: 0
    }

    this.nextSection = this.nextSection.bind(this);
  }

  componentDidMount() {}

  nextSection() {
  	let index = this.state.sectionIndex;
  	index++;

  	if(!this.state.workSections[index]) {
  		index = 0;
  	}
  	this.setState({sectionIndex: index})
  }

	render() {
		let sectionIndex = this.state.sectionIndex;
		let workSections = this.state.workSections;

		let numSects = this.state.workSections.map((sect, i) => {
			if (this.state.sectionIndex === i) {
				return <div key={i} className="position-dot active" data-index={i}></div>
			}
			return <div key={i} className="position-dot" data-index={i}></div>
		});

		return (
			<div className="work-page">
				<div className="work-section">
					<WorkSection currentSection={workSections[sectionIndex]} />
					<div className="work-page-control">
						<div className="work-position-display">{numSects}</div>
						<div className="next-sect-button" onClick={this.nextSection}>NEXT ></div>					
					</div>
				</div>
			</div>
		)
	}
}