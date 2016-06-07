import React from 'react';
import ReactDOM from 'react-dom';

const TreePic=()=>(
    <div>
        <img src="http://findicons.com/files/icons/170/avatar_girls/128/girl_2.png"/>
    </div>
    );
    
const Treename=()=>(
    <div>
        <input type="text" className="input-name" placeholder="treename" />
        <button className="submit-button">
            edit
        </button>
    </div>
    );

const Treeinfo=()=>(
    <div>
        <div id="species"></div>
        <div id="status"></div>
        <div id="age"></div>
        <button className="howto-button">
            How to take care
        </button>
    </div>
    );

const ViewTreediary=()=>(
    <button className="view-tree-diary">
        View Tree Diary
    </button>
    );

const NewTreediary=()=>(
    <button className="new-tree-diary">
        New Tree Diary
    </button>
    );
    
const TreeProfileContainer=()=>(
    <div className="profile-containner">
        <TreePic />
        <Treename />
        <Treeinfo />
        <ViewTreediary />
        <NewTreediary />
	</div>
    );
export { TreeProfileContainer}