import React from 'react';
import ReactDOM from 'react-dom';

const  array = [ ["images/market/tree-icon-3.png", "rose"], 
                ["images/market/tree-icon-3.png","tree"] ,
                ["images/market/tree-icon-3.png","jasmine"]
            ]
const SellItem = ({url , name}) => (
    	<img src={url}  alt={name}/>
);
const MarketContainer = () => (
	<div className="market-containner">
    	<div className="name"> Market </div>
        {array.map(link => ( <SellItem url={link[0]} name={link[1]}/> ))}	
	</div>
);
export {MarketContainer}