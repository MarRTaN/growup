require('../public/css/acheive.scss')

const  setElement = require('../public/js/acheive.js')
import React from 'react';
import ReactDOM from 'react-dom';
import {ItemContainer} from './itemList.jsx'
import {PanelContainer} from './panel.jsx' 
// const  array = [ ["images/market/tree-icon-3.png", "rose"], 
//                 ["images/market/tree-icon-3.png","tree"] ,
//                 ["images/market/tree-icon-3.png","jasmine"]
//             ]

const AchievementContainer = () => (
	<div className="achieve-containner">
        <ItemContainer array =""/>	
        <PanelContainer />
	</div>
);

class AchievementPage extends React.Component {
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
    return (<AchievementContainer />)
  }
}

export { AchievementPage }