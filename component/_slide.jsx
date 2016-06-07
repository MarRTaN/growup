import React from 'react'
import {Link } from 'react-router'
export const Slide = Component => class extends React.Component {
  render () {
    return (<div>
              <div className="plant-canvas">
                <Link to='treeprofile'><Component />
                </Link>
              </div>
              <div className="left-button"></div>
              <div className="right-button"></div>
            </div>)
  }
}
