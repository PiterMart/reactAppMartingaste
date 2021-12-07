import React from 'react';
import './Item.css';
function Item({pictureUrl, title, price}){

  return (
  <div className="item">
    <img src={pictureUrl}></img>
    <p>{title}</p>
    <p>{price}</p>
  </div>
  )
}

export default Item;