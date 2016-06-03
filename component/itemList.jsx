import React from 'react';
import ReactDOM from 'react-dom';

const Item = ({url , name}) => (
    	<img src={url}  alt={name}/>
);
const ItemContainer = ({array}) => (
	<div className="item-containner">
    	<div className="name"> Achievement </div>
        {array.map(link => ( <AchieveItem url={link[0]} name={link[1]}/> ))}	
	</div>
);
export {ItemContainer}