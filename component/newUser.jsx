require("../public/css/home.css")
require("../public/js/home.js")
import React from 'react';
import ReactDOM from 'react-dom';

const NewUserContainer = () => (
	<div className="newUser-container">
		<div className="newUser-head" id="newUser-header">
			<div className="level-container">
				<span id="level-number">1</span>
				LEVEL
			</div>
		</div>
		<div className="body">
		</div>

	</div>
);
export {NewUserContainer}