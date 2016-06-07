import React from 'react';
import ReactDOM from 'react-dom';
import {PanelContainer}  from './panel'

const Profilepic=()=>(
    <div>
        <img src="http://findicons.com/files/icons/170/avatar_girls/128/girl_2.png"/>
        <button className="changepic">
            change picture
        </button>
    </div>
    );
    
const Profile=()=>(
    <div>
        <input type="text" className="input-name" placeholder="profilename" />
        <input type="text" className="input-name" placeholder="name" />
        <input type="text" className="input-name" placeholder="sex" />
        <input type="text" className="input-name" placeholder="birthdate" />
        <input type="text" className="input-name" placeholder="address" />
        <input type="text" className="input-name" placeholder="phone" />
        <button className="submit-button">
            Submit
        </button>
    </div>
    );


const ProfileContainer=()=>(
    <div className="profile-containner">
        <Profilepic />
        <Profile />
        <PanelContainer />
	</div>
    );
export { ProfileContainer}

