import React from 'react'
import ReactDOM from 'react-dom'
import { PanelContainer } from './panel'
import {Link } from 'react-router'



const TreeSpeciesProfile = () => (
  <div>
    <div className="treespeciespic"></div>
    <div className="treespeciesname"></div>
    <div className="treespeciesdesc"></div>
    <div className="treespecieshowto"></div>
    <input type="text" className="input-name" placeholder="treename" />
    <button className="submit-button">
      <Link to='newtreeanimation'>Submit</Link>
    </button>
  </div>
)

const NewTreeContainer = () => (
  <div className="newtree-containner">
    <TreeSpeciesProfile />
    <PanelContainer />
  </div>
)
export { NewTreeContainer }
