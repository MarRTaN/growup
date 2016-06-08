import React from 'react';
import ReactDOM from 'react-dom';
import {Link } from 'react-router'

const NewDiaryHead=()=>(
    <div className="diary-head">
        <div className="tree-name"></div>
        <div className="tree-diary-date"></div>
    </div>
    );
const NewDiaryText=()=>(
    <div className="diary-text-form">
        <input type="text" className="diary-input" placeholder="Diary Today" />
        <button className="submit-button">
            <Link to='newdiaryadded'> submit</Link>
        </button>
        <button className="cancel-button">
            <Link to='treeprofile'>cancel</Link>
        </button>
    </div>
    );
const NewDiaryContainer=()=>(
    <div className="new-diary-container">
        <NewDiaryHead />
        <NewDiaryText />
    </div>
    );
export { NewDiaryContainer}