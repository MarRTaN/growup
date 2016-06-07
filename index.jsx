require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import { CheckTreePage } from './component/checkTree'
import { NewUserPage } from './component/newUser' //complete
import { HomeContainer } from './component/home'
import { IntroContainer } from './component/intro'
import { MarketPage } from './component/market'
import { ScanQRContainer } from './component/scanqr'
import { NewtreeAnimationContainer } from './component/newtreeanimation'
import { AchievementPage } from './component/achievement'
import { AchievementItemContainer } from './component/achievementitem'
import { FriendContainer } from './component/friend'
import { ProfileContainer } from './component/profile'
import { TreeProfileContainer } from './component/treeprofile'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/checktree" component={CheckTreePage} />
    <Route path="/home" component={HomeContainer} />
    <Route path="/intro" component={IntroContainer} />
    <Route path="/newuser" component={NewUserPage} />
    <Route path="/market" component={MarketContainer} />
    <Route path="/scanqr" component={ScanQRContainer} />
    <Route path="/newtreeanimation" component={NewtreeAnimationContainer} />
    <Route path="/achievement" component={AchievementPage} />
    <Route path="/achievements" component={AchievementItemContainer} />
    <Route path="/friend" component={FriendContainer} />
    <Route path="/profile" component={ProfileContainer} />
    <Route path="/treeprofile" component={TreeProfileContainer} />
    <Route path="*" component={HomePage} />
  </Router>
  ), document.querySelector('#myApp'))
