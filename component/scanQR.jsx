import React from 'react';
import ReactDOM from 'react-dom';

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
	</div>
);
export {ScanQRContainer}