require('../public/css/panel.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
const ProfileButton = () => (
  <Link to='/profile'>
  <div className="panel-button profile"></div>
  </Link>
)
const AchievementButton = () => (
  <Link to='/achievement'>
  <div className="panel-button acheivement"></div>
  </Link>
)
const MarketButton = () => (
  <Link to='/market'>
  <div className="panel-button market"></div>
  </Link>
)

const PanelContainer = () => (
  <div className="panel-container">
    <ProfileButton />
    <MarketButton />
    <AchievementButton />
  </div>
)
export { PanelContainer }
