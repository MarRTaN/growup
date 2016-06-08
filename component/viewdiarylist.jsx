import React from 'react';
import ReactDOM from 'react-dom';
import {Link } from 'react-router'

const Diary = (date) => (
  <div className="diary">
    <Link to='viewdiary'><div className="diary-time"> {date} </div></Link>
  </div>
)

const TreeName =()=>(
    <div className="treename">
    </div>
    )

const ViewDiaryListContainer=({diaries})=>(
    <div className="diary-list-container">
        <TreeName />
    {diaries.map((diary, i) => (<Diary key={i} date={diary.date} />))}
    </div>
    );
export { ViewDiaryListContainer}