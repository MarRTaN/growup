require('../public/css/home.scss')
require('../public/js/TweenMax.min.js')
require('../public/js/MorphSVGPlugin.min.js')
require('../public/js/findShapeIndex.js')
require('../public/js/home.js')
import React from 'react'
import { PanelContainer } from './panel.jsx'
import { PlantDemo01 } from './_plantdemo01'
import { Slide } from './_slide'

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


const Plant = Slide(PlantDemo01)
export { HomeContainer }
