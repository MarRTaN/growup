import React from 'react';
import ReactDOM from 'react-dom';
import {ItemContainer} from './itemList.jsx'
import {PanelContainer} from './panel.jsx' 

const  array = [ ["images/market/tree-icon-3.png", "rose"], 
                ["images/market/tree-icon-3.png","tree"] ,
                ["images/market/tree-icon-3.png","jasmine"]
            ]
const SellItem = ({url , name}) => (
    	<img src={url}  alt={name}/>
);
const MarketContainer = () => (
	<div className="market-containner">
    	<ItemContainer array =""/>	
        <PanelContainer />	
	</div>
);
export {MarketContainer}