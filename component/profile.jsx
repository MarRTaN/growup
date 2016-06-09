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
  <div>
    <img src="http://findicons.com/files/icons/170/avatar_girls/128/girl_2.png" />
    <button className="changepic">
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

const ProfileContainer = ({user}) => (
  <div className="profile-containner">
    <Profile user={user} />
    <Profilepic />
    <Logout />
    <PanelContainer />
  </div>
)

class profilePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: { profilename: 'avd'}
    }
  }
  componentWillMount () {}
  componentDidMount () {}

  render () {
    return (<ProfileContainer user={this.state.user} />)
  }
}

export { profilePage }
