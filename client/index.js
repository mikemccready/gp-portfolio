// index.js
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// containers and components
import App from './App';
import Intro from './pages/Intro';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

// attach point
const appRoot = document.getElementById('main-container');

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Intro} />
			<Route path="/work" component={Work} />
			<Route path="/contact" component={Contact} />
			<Route path="/experience" component={Experience} />
		</Route>
	</Router>
), appRoot);