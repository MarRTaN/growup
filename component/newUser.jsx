import React from 'react';
import ReactDOM from 'react-dom';

const  NameInput = () => (
    <div>
    	    <input type="text" className="input_name" />
    	    <button className="submit"> submit</button>
    </div>
    )
const Fb = () => (
    	<button >login with fb </button>
    )
const NewUserContainer = () => (
	<div className="newUser-containner">
    	<div className="name"> กรอกชื่อ	</div>
        <NameInput />	
        <Fb />
	</div>
);
export {NewUserContainer}