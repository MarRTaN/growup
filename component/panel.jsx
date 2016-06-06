require("../public/css/panel.css")
import React from 'react';
import ReactDOM from 'react-dom';

const ProfileButton = ()=>(
    <div className="panel-button profile"></div>
);
const AchievementButton = ()=>(
    <div className="panel-button acheivement"></div>
);
const MarketButton = ()=>(
    <div className="panel-button market"></div>
);

const PanelContainer = () => (
	<div className="panel-container">
        <ProfileButton />
        <MarketButton />
        <AchievementButton />
	</div>
);
export {PanelContainer}