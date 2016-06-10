require('../public/css/acheiveitemlist.scss')
require('../public/js/TimelineLite.min.js')
import React from 'react'
import $ from '../public/js/jquery.js'
// import ReactDOM from 'react-dom'

const getDetail = (id) => {
  var tl = new TimelineLite();
  if(id == 0){
    document.getElementById("progress-text-"+id).innerHTML = "1/1";
    tl.to($('#progress-bar-'+id), 0.01, {width:"0%", ease:Linear.easeNone})
      .to($('#progress-bar-'+id), 0.1, {width:"100%", ease:Linear.easeNone});
  }
  else{
    tl.to($('#progress-bar-'+id), 0.01, {width:"0%", ease:Linear.easeNone})
      .to($('#progress-bar-'+id), 0.1, {width:(id+1)*10+"%", ease:Linear.easeNone});
  }
  
  $('.fade-black').fadeIn(100);
  $('#item-detail-'+id).fadeIn(100);
}

const close = (id) => {
  var tl = new TimelineLite();
  tl.to($('#progress-bar-'+id), 0.01, {width:"0%", ease:Linear.easeNone});
  $('.fade-black').fadeOut(50);
  $('#item-detail-'+id).fadeOut(50);

}

const Item = ({url, name, id}) => (
  <div className="item" id={"item-"+id} onClick={()=>getDetail(id)}>
    <img src={url} alt={name} width="50 %" />
  </div>
)

const ItemDetail = ({name, id}) => (
  <div className="item-show"  id={"item-detail-"+id}>
    <div className="name">{name}</div>
    <div className="detail">ฉันจะได้เป็นนักอนุรักษ์ธรรมชาติแล้วล่ะ</div>
    <div className="progress-bar-bg">
      <div className="progress-bar" id={"progress-bar-"+id}></div>
    </div>
    <div className="progress-text" id={"progress-text-"+id}>{id+1}/10</div>
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
