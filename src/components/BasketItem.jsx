import React from 'react'

export default function BasketItem(props) {
const{
  mainId, 
  displayName, 
  price, 
  quantity, 
  removeFromBacket= Function.prototype,
  incQuantity= Function.prototype,
  decQuantity= Function.prototype
}=props
  return (
    <li  className="collection-item">
{displayName} <i className='material-icons basket-quantity' onClick={()=>decQuantity(mainId)}>remove</i> x
{quantity}{' '} <i className='material-icons basket-quantity' onClick={()=>incQuantity(mainId)}>add</i> = 
{price*quantity} €
  <span 
  className="secondary-content" 
  onClick={()=> removeFromBacket(mainId)}
  >
      <i className="material-icons baskert-delete" >close</i>
  </span>
    </li>
  )
}

