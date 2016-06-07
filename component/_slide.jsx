import React from 'react'
export const Slide = Component => class extends React.Component {
  render () {
    return (<div>
              <div className="plant-canvas">
                <Component />
              </div>
              <div className="left-button"></div>
              <div className="right-button"></div>
            </div>)
  }
}
