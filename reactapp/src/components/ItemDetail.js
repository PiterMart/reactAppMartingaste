import React, { useState, useEffect } from 'react';
import Item from './Item';


const producto = {pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Puma_face.jpg/255px-Puma_face.jpg', title: 'titulo', price: 9999}

const ItemDetail = () => {

  const [item, setItem] = useState([]);

  const getITem = (success, timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(success) {
          resolve(producto);
        } else {
          reject({message: 'Error'});
        }
      }, timeout);
    });
  }
  useEffect(()=> {
    getITem(true, 2000).then(data => setItem(data))
  }, [])

  return (
    <div>
      <Item pictureUrl={item.pictureUrl} title={item.title} price={item.price} />
    </div>
  
  )
}

export default ItemDetail;