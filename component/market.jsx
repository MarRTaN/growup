require('../public/css/market.scss')

const  setElement = require('../public/js/market.js')
import React from 'react'
import ReactDOM from 'react-dom'
import { ItemContainer } from './itemlist.jsx'
import { PanelContainer } from './panel.jsx'

const MarketContainer = ({items}) => (
  <div className="market-containner">
    market
    <ItemContainer items={items} />
    <PanelContainer />
  </div>
)
class MarketPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    setElement()
    fetch('https://growupapp.firebaseio.com/Product.json')
      .then(response => response.json())
      .then(items => {
        // console.log('gettted')
        items = items.map(item => ({url: item.img, name: (item.name + ',' + item.price)}))
        this.setState({items})
      })
  // this.state.items  = [1,2,4]
  }

  render () {
    return (<MarketContainer items={this.state.items} />)
  }
}
export { MarketPage }
