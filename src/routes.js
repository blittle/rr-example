import React from 'react';

import HelloWorld from './HelloWorld.js';
import OtherComponent from './otherComponent.js'
import { Router, Route, hashHistory } from 'react-router';

export default function() {
	return <Router history={hashHistory}>
		<Route path="/" component={HelloWorld} />
		<Route path="/someOtherRoute" component={OtherComponent} />
	</Router>
}
