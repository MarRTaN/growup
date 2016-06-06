require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import { CheckTreeContainer } from './component/checkTree'
import { NewUserContainer } from './component/newUser'
import { ScanQRContainer } from './component/scanQR'
import { HomeContainer } from './component/home'
// const Test = ({data}) => (<h1 className="test"> test 2 ww  {data}</h1>)

export class App extends React.Component {
  render () {
    return (
			<CheckTreeContainer />
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/checktree" component={CheckTreeContainer} />
    <Route path="/home" component={HomeContainer} />
    <Route path="*" component={HomeContainer} />
  </Router>
  ), document.querySelector('#myApp'))
