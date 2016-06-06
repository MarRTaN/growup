require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import { CheckTreeContainer } from './component/checkTree'
import { NewUserPage } from './component/newUser'
import { HomeContainer } from './component/home'
import { IntroContainer } from './component/intro'
import { MarketContainer } from './component/market'
import { ScanQRContainer } from './component/scanqr'
import { NewtreeAnimationContainer } from './component/newtreeanimation'
import { AchievementContainer } from './component/achievement'
import { AchievementItemContainer } from './component/achievementitem'
import { FriendContainer } from './component/friend'
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
    <Route path="/intro" component={IntroContainer} />
    <Route path="/newuser" component={NewUserPage} />
    <Route path="/checktree" component={CheckTreeContainer} />
    <Route path="/market" component={MarketContainer} />
    <Route path="/scanqr" component={ScanQRContainer} />
    <Route path="/newtreeanimation" component={NewtreeAnimationContainer} />
    <Route path="/achievement" component={AchievementContainer} />
    <Route path="/achievements" component={AchievementItemContainer} />
    <Route path="/friend" component={FriendContainer} />
    <Route path="*" component={HomeContainer} />
  </Router>
  ), document.querySelector('#myApp'))
