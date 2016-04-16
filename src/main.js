import React from 'react';
import {render} from 'react-dom';
import myRoutes from './routes.js';

render((
	myRoutes()
), document.getElementById('app'));
