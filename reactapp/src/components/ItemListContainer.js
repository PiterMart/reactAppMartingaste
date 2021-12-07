import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';



const products = [
  {
    id: 1,
    pictureUrl: 'https://static.scientificamerican.com/espanol/cache/file/050D641B-C40F-460A-B892534B0024CB3C_source.jpg?w=590&h=800&4147C8A7-B3A4-4126-9293322177AC2D1C',
    title: 'Panda',
    price: 500
  }, {
    id: 2,
    pictureUrl: 'https://cdn.myshoptet.com/usr/www.mapcards.net/user/shop/big/677_maf14-baby-cheetahw.jpg?5c3d94af',
    title: 'Cheetah',
    price: 700
  }
]


const ItemListContainer = ({greeting}) => {


  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
  const mock = (success, timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(success) {
          resolve(products);
          setIsLoading(false)
        } else {
          reject({message: 'Error'});
        }
      }, timeout);
    });
  }

  useEffect(()=> {
    mock(true, 2000).then(data => setItems(data))
  }, [])

    if(isLoading) return <div>Loading...</div>
    return(
        <ItemList items={items} />
    )
}
export default  ItemListContainer;