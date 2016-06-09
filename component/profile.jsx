require('../public/css/profile.scss')

const  setElement = require('../public/js/profile.js')
import React from 'react'
import ReactDOM from 'react-dom'
import { PanelContainer } from './panel'
import { browserHistory } from 'react-router'
const logout = () => {
  window.localStorage.removeItem('name')
  browserHistory.push('/newuser')
}
const Logout = () => (
  <button onClick={logout}>
    logout
  </button>
)
const Profilepic = () => (
  <div className="profile-pic">
    <img src="" />
    <button className="change-profile-btn">
      change picture
    </button>
  </div>
)

const Profile = ({user}) => (
  <div>
    <input type="text" className="input-name" placeholder={'profilename' + user} />
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
    <Logout />
    <PanelContainer />
  </div>
)

class ProfilePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user : { profilename :  "avd"}
    }
  }
  componentWillMount () {}
  componentDidMount () {
    setElement()
  }

  render () {
    return (<ProfileContainer user={this.state.user} />)
  }
}

export { ProfilePage }