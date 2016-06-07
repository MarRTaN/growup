require('../public/css/checkTree.css')
const setElement = require('../public/js/checkTree.js')
import React from 'react';
import ReactDOM from 'react-dom';

const BuyTree = () => (
    	<button className="buy-button">
          Buy a tree
        </button>
    )
const HaveTree = () => (
    	<button className="have-button">
          I have a tree
        </button>
    )
const Skip = () => (
    	<button className="skip-button">
          Skip
        </button>
    )
const CheckTreeContainer = () => (
	<div className="check-tree-container">
    	<div className="name"> มีต้นไม้หรือไม่?	</div>
        <BuyTree />	
        <HaveTree />
        <Skip />
	</div>
);

class CheckTreePage extends React.Component {
  componentWillMount () {
  }
  componentDidMount () {
    setElement()
  }
  render () {
    return <CheckTreeContainer />
  }
}

export {CheckTreePage}