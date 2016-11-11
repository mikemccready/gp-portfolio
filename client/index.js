// index.js
import React from 'react';
import {render} from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// containers and components
import App from './App';

// attach point
const appRoot = document.getElementById('main-container');

render((
	<App />
), appRoot);