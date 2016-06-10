require('../public/css/friend.scss')

import React from 'react'
import { ItemContainer } from './itemlist.jsx'
import { PanelContainer } from './panel.jsx'
import { Link } from 'react-router'

const Friend = ({url, name, flower, vegetable, etc}) => (
  <div className="friendlist">
    <Link to='/friendprofile'>
    <img src={url} alt={name} width="50 %" />
    <div className="figure">
      {name}
    </div>
    <div className="treeicon">
      <img src="http://downloadicons.net/sites/default/files/flower-icons-40733.png" />
      {flower}
    </div>
    <div className="treeicon">
      <img src="http://icons.iconarchive.com/icons/pixture/vegetable/32/Chinese-Spinach-icon.png" />
      {vegetable}
    </div>
    <div className="treeicon">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Farm-Fresh_tree.png" />
      {etc}
    </div>
    </Link>
  </div>
)

const FriendContainer = ({friends}) => (
  <div className="friend-containner">
    <div className="name">
      Friend
    </div>
    {friends.map((friend, i) => (<Friend
                                   key={i}
                                   url={friend.url}
                                   name={friend.name}
                                   flower={friend.flower}
                                   vegetable={friend.vegetable}
                                   etc={friend.etc} />))}
    <PanelContainer />
  </div>

)
class FriendPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      friends: [ { name: 'A', url: 'url', flower: ' blink star', vegetable: 'vel', etc: 'etc'}]
    }
  }
  componentWillMount () {
    this.setState({friends: [ { name: 'A', url: 'url', flower: ' blink star', vegetable: 'vel', etc: 'etc'}]})
  }
  componentDidMount () {}
  componentWillUnmount () {
    //    this.fetchStream.abort()
  }
  render () {
    return (
      <div className="friend-container">
        <PanelContainer />
      </div>
    )
    //return (<FriendContainer friends={this.state.friends} />)
  }
}
export { FriendPage }
