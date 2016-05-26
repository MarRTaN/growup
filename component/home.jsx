require("../public/css/home.css")
require("../public/js/home.js")
import React from 'react';
import ReactDOM from 'react-dom';

const HomeContainer = () => (
	<div className="home-container">
		<div className="header" id="home-header">
			<div className="level-container">
				<span id="level-number">1</span>
				LEVEL
			</div>
		</div>
		<div className="body">
		</div>
		<div className="footer">
		</div>
	</div>
);

// export class App extends React.Component {
// 	render() {
// 		return (
// 			<div>Simple React + Babel + Bootstrap + Webpack
// 				<Test data="bbb"/>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<App/>, document.querySelector("#myApp"));
export {HomeContainer}