import React from 'react';
import ReactDOM from 'react-dom';

const  array = [ "images/market/tree-icon-3.png", 
                "images/market/tree-icon-3.png",
                "images/market/tree-icon-3.png"
            ]
const IntroSlide = (url) => (
    <img src={url}  />
);
const Spot = ()=>(
    <div></div>
);
const IntroContainer = () => (
	<div className="intro-containner">
        {array.map(link => ( <IntroSlide url={link} /> ))}
        <LeftSlide />
        <Spot />
        <RightSlide />
	</div>
);
export {IntroContainer}