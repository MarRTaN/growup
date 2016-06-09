import React from 'react'
import { ItemContainer } from './itemlist.jsx'
import { PanelContainer } from './panel.jsx'
import {Link } from 'react-router'

const Friend = ({url, name,flower,vegetable,etc}) => (
  <div className="friend">
  <Link to='friendprofile'>
    <img src={url} alt={name} width="50 %" />
    <div className="figure"> {name} </div>
    <div className="treeicon"> <img src="http://downloadicons.net/sites/default/files/flower-icons-40733.png" /> {flower} </div>
    <div className="treeicon"> <img src="http://icons.iconarchive.com/icons/pixture/vegetable/32/Chinese-Spinach-icon.png" /> {vegetable} </div>
    <div className="treeicon"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Farm-Fresh_tree.png" /> {etc} </div>
    </Link>
  </div>
)

const FriendContainer = ({friends}) => (
  <div className="achieve-containner">
    <div className="name">
      Friend
    </div>
    {friends.map((friend, i) => (<Friend key={i} url={friend.url} name={friend.name} flower={friend.flower} vegetable={friend.vegetable} etc={friend.etc}/>))}
    <PanelContainer />
  </div>
  
)
// <ItemContainer />
// <PanelContainer />
export { FriendContainer }
