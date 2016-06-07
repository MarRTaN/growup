import React from 'react'
// import ReactDOM from 'react-dom'

const Item = ({url, name}) => (
  <div>
    {name}
    <img src={url} alt={name} width="50 %"/>
  </div>
)
const ItemContainer = ({items}) => (
  <div className="item-containner">
    <div className="name">
      item container
    </div>
    {items.map( (item, i) => (<Item url={item.img} name={item.name}> </Item>) )}
  </div>
)
export { ItemContainer }
