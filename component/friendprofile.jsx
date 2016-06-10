import React from 'react'
import ReactDOM from 'react-dom'
import { PanelContainer } from './panel'

const Profile = () => (
  <div>
    <div className="friendpic"> </div>
    <div className="friendname"></div>
  </div>
)

const Watering=()=>(
    <button >Water</button>
    )

const FriendTree = ({url, name,age}) => (
  <div className="friend">
    <img src={url} alt={name} width="50 %" />
    <div className="figure"> {name} </div>
    <div className="treeicon"> {age} </div>
  </div>
)
    
const FriendProfileContainer = ({friendtrees}) => (
  <div className="profile-containner">
    <Profile />
    {friendtrees.map((friendtree, i) => (<FriendTree key={i} url={friendtree.url} name={friendtree.name} age={friendtree.age} />))}
    <Watering />
    <PanelContainer />
  </div>
)
export { FriendProfileContainer }
