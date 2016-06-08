import React from 'react';
import ReactDOM from 'react-dom';

const NewDiaryHead=()=>(
    <div className="diary-head">
        <div className="tree-name"></div>
        <div className="tree-diary-date"></div>
    </div>
    );
const NewDiaryText=()=>(
    <div className="diary-text-form">
        <input type="text" className="diary-input" placeholder="Diary Today" />
    </div>
    );
const NewDiaryContainer=()=>(
    <div className="new-diary-container">
        <NewDiaryHead />
        <NewDiaryText />
    </div>
    );
export { NewDiaryContainer}