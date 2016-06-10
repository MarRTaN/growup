require('../public/css/itemlist.scss')
import React from 'react'
import $ from '../public/js/jquery.js'
// import ReactDOM from 'react-dom'

const getDetail = (id) => {
  $('#item-detail-'+id).fadeIn(100);
  $('.fade-black').fadeIn(100);
}

const close = (id) => {
  $('#item-detail-'+id).fadeOut(50);
  $('.fade-black').fadeOut(50);
}

const Item = ({url, name, id}) => (
  <div className="item" id={"item-"+id} onClick={()=>getDetail(id)}>
    <img src={url} alt={name} width="50 %" />
    <div className="price">{name.split(',')[1]} ฿</div>
  </div>
)

const ItemDetail = ({name, id}) => (
  <div className="item-market-show"  id={"item-detail-"+id}>
    <div className="name">{name.split(',')[0]}</div>
    <div className="detail">{name.split(',')[2]}</div>
    <div className="buy-btn">Buy</div>
    <div className="close-btn" onClick={()=>close(id)}></div>
  </div>
)

const ItemContainer = ({items}) => (
  <div className="full-page">
    <div className="item-container">
      {items.map((item, i) => (<Item key={i} url={item.url} name={item.name} id={i}/>))}
      {items.map((item, i) => (<ItemDetail key={i} name={item.name} id={i}/>))}
    </div>
    <div className="fade-black"></div>
  </div>
) 

export { ItemContainer }
