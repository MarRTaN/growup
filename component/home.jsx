require('../public/css/home.scss')

const setElement = require('../public/js/home.js')
import React from 'react'
import { PanelContainer } from './panel.jsx'
import { PlantDemo01 } from './_plantdemo01'
import { Slide } from './_slide'
import { check } from '../helper/score_check'
const Plant = Slide(PlantDemo01)
const HomeContainer = ({name, lvl}) => (
  <div className="home-container">
    <div className="header">
      <div className="level-container">
        <div className="level-text">
          LEVEL
        </div>
        <div className="level-number" id="level-number">
          {lvl}
        </div>
      </div>
      <div className="plant-name" id="plant-name">
        {name}
      </div>
      <div className="level-bar-cover">
        <div className="level-bar"></div>
      </div>
    </div>
    <div className="body">
      <Plant />
    </div>
    <PanelContainer />
  </div>
)
class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      name: 'test name',
      lvl: 0
    }
  }
  componentWillMount () {
    const storage = window.localStorage
    const value = storage.getItem('name')
    this.setState({name: 'example'})
    if (value.indexOf('testuser.') >= 0) {
      const name = value.split('testuser.')[1]
      this.setState({name: name})
      this.fetchStream = window.fetch('https://growupapp.firebaseio.com/User.json')
        .then(response => response.json())
        .then(user => {
          user.filter(u => u.username === name)
            .map(u => {
              console.log(u)
              storage.setItem('data', JSON.stringify(user))
              const lvl = check(u.score)
              this.setState({lvl: lvl.lvl })
            })
        })
    }
  }
  componentDidMount () {
    setElement()
  }
  componentWillUnmount () {
    this.fetchStream.abort()
  }
  render () {
    return (<HomeContainer name={this.state.name} lvl={this.state.lvl} />)
  }
}

export { HomePage }
