import React from 'react';
import Item from './Item';

function ItemList({items}){

  return(
    <div>
      {items.map(item => {
        return <Item key={item.id} price={item.price} title={item.title} pictureUrl={item.pictureUrl} />
      })}
    </div>
  ) 
}

export default ItemList