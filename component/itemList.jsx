require('../public/css/itemlist.scss')
import React from 'react'
// import ReactDOM from 'react-dom'

const Item = ({url, name}) => (
  <div className="item">
    <img src={url} alt={name} width="50 %" />
    <div className="name"> {name.split(',')[0]}</div>
    <div className="price">{name.split(',')[1]} ฿ </div>
  </div>
)
const ItemContainer = ({items}) => (
  <div className="item-containner">
    {items.map((item, i) => (<Item key={i} url={item.url} name={item.name} />))}
  </div>
)
export { ItemContainer }
