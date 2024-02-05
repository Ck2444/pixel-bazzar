import React from 'react'
import BasketItem from './BasketItem';

export default function BasketList(props) {
    const {order =[], 
        handelBasketShow = Function.prototype,
        removeFromBacket = Function.prototype,
        incQuantity,
        decQuantity
    } =props;

    const totalPrice = order.reduce((sum, el)=> {
        return sum+el.price*el.quantity
    }, 0)
  return (
    <ul className="collection basket-list">
    <li  className="collection-item active">Warenkorb</li>
   {
        order.length ? order.map(item => (
            <BasketItem 
            key={item.id}
            {...item} 
            removeFromBacket={removeFromBacket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            />
        )) : <li className='collection-item'>Ihr Warenkorb ist leer ...</li>
    }
    <li className="collection-item active">
      Gesamtkosten: {totalPrice} €
      </li>
    <li className="collection-item">
      <button className="btn btn-small">Den Kauf abschließen</button>
      </li>
      
    <i className='material-icons basket-close' onClick={handelBasketShow}>close</i>
  </ul>
  ) ;
}
