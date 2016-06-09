require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import { CheckTreePage } from './component/checkTree'
import { NewUserPage } from './component/newuser' //complete
import { HomePage } from './component/home'
import { IntroContainer } from './component/intro'
import { MarketPage } from './component/market'
import { ScanQRContainer } from './component/scanqr'
import { NewtreeAnimationContainer } from './component/newtreeanimation'
import { AchievementPage } from './component/achievement'
import { AchievementItemContainer } from './component/achievementitem'
import { FriendContainer } from './component/friend'
import { ProfileContainer } from './component/profile'
import { TreeProfileContainer } from './component/treeprofile'
import { NewDiaryAddedContainer } from './component/newdiaryadded'
import { NewDiaryContainer } from './component/newdiaryform'
import { NewTreeAnimationContainer } from './component/newtreeanimation'
import { ViewDiaryContainer } from './component/viewdiary'
import { ViewDiaryListContainer } from './component/viewdiarylist'
import { FriendProfileContainer } from './component/friendprofile'
import { NewTreeContainer } from './component/newtree'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/checktree" component={CheckTreePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/intro" component={IntroContainer} />
    <Route path="/newuser" component={NewUserPage} />
    <Route path="/market" component={MarketPage} />
    <Route path="/scanqr" component={ScanQRContainer} />
    <Route path="/newtreeanimation" component={NewtreeAnimationContainer} />
    <Route path="/achievement" component={AchievementPage} />
    <Route path="/achievements" component={AchievementItemContainer} />
    <Route path="/friend" component={FriendContainer} />
    <Route path="/profile" component={ProfileContainer} />
    <Route path="/treeprofile" component={TreeProfileContainer} />
    <Route path="/newdiaryadded" component={NewDiaryAddedContainer} />
    <Route path="/newdiary" component={NewDiaryContainer} />
    <Route path="/newtreeanimation" component={NewTreeAnimationContainer} />
    <Route path="/viewdiary" component={ViewDiaryContainer} />
    <Route path="/viewdiarylist" component={ViewDiaryListContainer} />
    <Route path="/friendprofile" component={FriendProfileContainer} />
    <Route path="/newtree" component={NewTreeContainer} />
    <Route path="*" component={HomePage} />

  </Router>
  ), document.querySelector('#myApp'))
