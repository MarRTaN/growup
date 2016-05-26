import React from 'react';
import ReactDOM from 'react-dom';
import {ItemContainer} from './itemList.jsx'
//import {} 
// const  array = [ ["images/market/tree-icon-3.png", "rose"], 
//                 ["images/market/tree-icon-3.png","tree"] ,
//                 ["images/market/tree-icon-3.png","jasmine"]
//             ]
const AchieveItem = ({url , name}) => (
    	<img src={url}  alt={name}/>
);
const AchievementContainer = () => (
	<div className="achieve-containner">
        <ItemContainer array =""/>	
        <panel />
	</div>
);
export { AchievementContainer}