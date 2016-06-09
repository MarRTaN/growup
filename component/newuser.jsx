require('../public/css/newuser.scss')
const setElement = require('../public/js/newuser.js').setElement
import React from 'react'
import { browserHistory } from 'react-router'

const getid = (id) => document.getElementById(id)
const addUser = () => {
  const storage = window.localStorage
  const value = storage.getItem('name')

  if (value != null) {
    browserHistory.push('/home')
    return
  }

  const name = getid('newUserName').value
  storage.setItem('name', name)
  const getValue = storage.getItem('name')
  console.log(getValue)
  browserHistory.push('/home')
// storage.removeItem(key)
}
const NameInput = () => (
  <div>
    <input
      type="text"
      id="newUserName"
      className="input-name"
      placeholder="username" />
    <button className="submit-button" onClick={addUser}>
      Login
    </button>
  </div>
)
const Fb = () => (
  <button className="fb-button">
    <div className="fb-logo"></div>
    Login with Facebook
  </button>
)
const NewUserContainer = () => (
  <div className="new-user-container">
    <div className="logo"></div>
    <NameInput />
    <Fb />
  </div>
)

class NewUserPage extends React.Component {
  componentDidMount () {
    setElement()
  }

  render () {
    return <NewUserContainer />
  }
}
export { NewUserPage }
