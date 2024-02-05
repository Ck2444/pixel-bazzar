import React from 'react'

export default function Cart(props) {
    const {quantity=0, handelBasketShow=Function.prototype }= props;

  return (
    <div className='cart purple lighten-2' onClick={handelBasketShow}>
        <i className='material-icons'>shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}
