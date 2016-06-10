import React from 'react';
import ReactDOM from 'react-dom';
import {PanelContainer} from './panel.jsx'
import {Link } from 'react-router'

const CameraQR = () => (
    	<div></div>
    );

const Capture = () => (
        <button ><Link to='newtree'>Capture</Link></button>
    );
const ScanQRContainer = () => (
	<div className="scanqr-containner">
    	<div className="name"> Scan QR </div>
        <CameraQR />
        <Capture />
        <PanelContainer />
	</div>
);
export {ScanQRContainer}
