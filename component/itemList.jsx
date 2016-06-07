require('../public/css/itemlist.scss')
import React from 'react'
// import ReactDOM from 'react-dom'

const Item = ({url, name}) => (
  <div className="item">
    <img src={url} alt={name} width="50 %" />
    <div className="figure"> {name} </div>
  </div>
)
const ItemContainer = ({items}) => (
  <div className="item-containner">
    <div className="name">
      item container
    </div>
    {items.map((item, i) => (<Item key={i} url={item.url} name={item.name} />))}
  </div>
)
export { ItemContainer }
