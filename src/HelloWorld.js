import React from 'react';
import { Link } from 'react-router';

function HelloWorld () {
  return (
	<div>
    <h1>Hello World!</h1>
		<Link to="/someOtherRoute">Go to the other route!</Link>
	</div>
  );
}

export default HelloWorld;
