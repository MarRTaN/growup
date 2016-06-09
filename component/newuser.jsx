require('../public/css/newuser.scss')
const setElement = require('../public/js/newuser.js').setElement
import React from 'react'
import ReactDOM from 'react-dom'

const NameInput = () => (
  <div>
    <input type="text" className="input-name" placeholder="username" />
    <button className="submit-button">
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
