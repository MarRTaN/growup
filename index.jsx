require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import {HomeContainer} from './component/home'
// const Test = ({data}) => (<h1 className="test"> test 2 ww  {data}</h1>)

export class App extends React.Component {
	render() {
		return (
			<HomeContainer />
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
