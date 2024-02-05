import React from 'react'

export default function GoodsItem(props) {
    
    const {
      mainId,
      displayName,
      displayDescription,
      price:{regularPrice},
      displayAssets: [{ full_background }],
      addToBasket= Function.prototipe
    }= props;

  return (
    <div className="card" >
        <div className="card-image">
          <img src={full_background} alt={displayName}/>
        </div>
        <div className="card-content">
        <span className="card-title">{displayName}</span>
          <p>
            {displayDescription}
            </p>
        </div>
        <div className="card-action">
          <button className='btn'  onClick={()=> addToBasket({
            mainId,
            displayName,
            price: regularPrice,
          })}>In den Warenkorb</button>
          <span className='right' style={{fontSize: '1.8rem'}}>{regularPrice} ₾</span>
        </div>
      </div>
  )
}

