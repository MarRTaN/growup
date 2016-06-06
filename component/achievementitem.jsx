import React from 'react';
import ReactDOM from 'react-dom';
import {ItemContainer} from './itemList.jsx'
import {PanelContainer} from './panel.jsx'
const  array = [ ["images/market/tree-icon-3.png", "rose"],
                ["images/market/tree-icon-3.png","tree"] ,
                ["images/market/tree-icon-3.png","jasmine"]
            ]
const Item = () => (<div>
  item
  </div>)
const AchievementItemContainer = () => (
	<div className="achieve-containner">
        <Item />
        <PanelContainer />
	</div>
);
export { AchievementItemContainer}
