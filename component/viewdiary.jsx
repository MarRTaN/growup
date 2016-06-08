import React from 'react';
import ReactDOM from 'react-dom';

const DiaryHead=()=>(
    <div className="diary-head">
        <div className="tree-name"></div>
        <div className="tree-diary-date"></div>
    </div>
    );
const DiaryText=()=>(
    <div className="show-text">
    </div>
    );
const ViewDiaryContainer=()=>(
    <div className="view-diary-container">
        <DiaryHead />
        <DiaryText />
    </div>
    );
export { ViewDiaryContainer}