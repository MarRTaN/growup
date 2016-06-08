require('../public/css/home.scss')

const  setElement = require('../public/js/home.js')
import React from 'react'
import { PanelContainer } from './panel.jsx'
import { PlantDemo01 } from './_plantdemo01'
import { Slide } from './_slide'

const Plant = Slide(PlantDemo01)
const HomeContainer = () => (
  <div className="home-container">
    <div className="header">
      <div className="level-container">
        <div className="level-text">
          LEVEL
        </div>
        <div className="level-number" id="level-number">
          1
        </div>
      </div>
      <div className="plant-name" id="plant-name">
        Malee
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
      items: []
    }
  }
  componentDidMount () {
    setElement()
    // fetch('https://growupapp.firebaseio.com/Product.json')
    //   .then(response => response.json())
    //   .then(items => {
    //     console.log('gettted')
    //     items = items.map(item => ({url: item.img, name: (item.name + ',' + item.price)}))
    //     this.setState({items})
    //   })
  // this.state.items  = [1,2,4]
  }

  render () {
    return (<HomeContainer  />)
  }
}

export { HomePage }
