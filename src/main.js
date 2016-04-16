import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './HelloWorld.js';

import { Router, Route, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={HelloWorld}/>
    <Route path="/two" component={NewRoute}/>
  </Router>
), document.getElementById('app'))
