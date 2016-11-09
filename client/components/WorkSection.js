// WorkSection.js
import React from 'react';

export default function WorkSection(props) {

	let title = props.currentSection.title;
	let description = props.currentSection.description;
	let detail = props.currentSection.detail;

  return (
		<div className="work-description">
			<h2>{title}</h2>
			<h5>{description}</h5>
			<div>
				<p>{detail}</p>
			</div>
			<a href={props.currentSection.gitUrl} target="_blank">
				<div className="work-icons">
					<div className="work-icon git"></div>
					<h5>github</h5>
				</div>
			</a>
		</div>
  )
}