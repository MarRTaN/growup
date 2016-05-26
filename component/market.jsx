import React from 'react';
import ReactDOM from 'react-dom';


const SellItem = () => (
    	<img src="images/market/tree-icon-3.png" />
);
const MarketContainer = () => (
	<div className="market-containner">
    	<div className="name"> Market </div>
        <SellItem />	
	</div>
);
export {MarketContainer}