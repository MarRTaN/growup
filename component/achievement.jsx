require('../public/css/acheive.scss')

const  setElement = require('../public/js/acheive.js')
import React from 'react'
import ReactDOM from 'react-dom'
import { ItemContainer } from './itemlist.jsx'
import { PanelContainer } from './panel.jsx'

const AchievementContainer = ({items}) => (
  <div className="achieve-containner">
    <ItemContainer items={items} />
    <PanelContainer />
  </div>
)

class AchievementPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    setElement()
    fetch('https://growupapp.firebaseio.com/Achievement.json')
      .then(response => response.json())
      .then(items => {
        console.log('gettted')
        items = items.map(item => ({url: item.img, name: (item.name)}))
        this.setState({items})
      })
  // this.state.items  = [1,2,4]
  }

  render () {
    return (<AchievementContainer items={this.state.items} />)
  }
}
export { AchievementPage }
