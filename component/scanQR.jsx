import React from 'react';
import ReactDOM from 'react-dom';
import {PanelContainer} from './panel.jsx'

const CameraQR = () => (
    	<div></div>
    );

const Capture = () => (
        <button >Capture</button>
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
