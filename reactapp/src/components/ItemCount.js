import React, {useState} from "react";



function ItemCount({ stock, initial, onAdd, itemName}) {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count + 1 > stock) return;
        setCount(count + 1)
    }
    const decrement = () => {
        if (count < 2) return;
        setCount(count - 1)
    }
    

    return (
        <div className="App">
          <h4> Tienes {count} {itemName}</h4>
    
          <button onClick={() => decrement(count - 1)}> - </button>
          <button onClick={() => increment()}> + </button>
          <button onClick={() => onAdd(count, itemName)}> Agregar </button>
        </div>
      );
}

export default ItemCount;
