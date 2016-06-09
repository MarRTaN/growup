require('../public/css/profile.scss')

const  setElement = require('../public/js/profile.js')
import React from 'react'
import ReactDOM from 'react-dom'
import { PanelContainer } from './panel'

const Profilepic = () => (
  <div className="profile-pic">
    <img src="" />
    <button className="change-profile-btn">
      change picture
    </button>
  </div>
)

const Profile = () => (
  <div>
    <input type="text" className="input-name" placeholder="profilename" />
    <input type="text" className="input-name" placeholder="name" />
    <input type="text" classe="input-name" placeholder="sex" />
    <input type="text" className="input-name" placeholder="birthdate" />
    <input type="text" className="input-name" placeholder="address" />
    <input type="text" className="input-name" placeholder="phone" />
    <button className="submit-button">
      Submit
    </button>
  </div>
)

const ProfileContainer = () => (
  <div className="profile-container">
    <Profile />
    <Profilepic />
    <PanelContainer />
  </div>
)

class ProfilePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    setElement()
  }

  render () {
    return (<ProfileContainer  />)
  }
}
export { ProfilePage }
