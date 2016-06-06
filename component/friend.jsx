import React from 'react';
import ReactDOM from 'react-dom';
import {ItemContainer} from './itemList.jsx'
import {PanelContainer} from './panel.jsx'
const  array = [ ["images/market/tree-icon-3.png", "rose"],
                ["images/market/tree-icon-3.png","tree"] ,
                ["images/market/tree-icon-3.png","jasmine"]
            ]

const FriendContainer = () => (
	<div className="achieve-containner">
  frind
        <ItemContainer array = {array}/>
        <PanelContainer />
	</div>
);
export { FriendContainer}
