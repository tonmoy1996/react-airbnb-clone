import React from 'react';
import '../css/card.css';
function Card({ src, title, des, price }) {
  return (
    <div className='card'>
      <img src={src} alt={src} />
      <div className='card_info'>
        <h2>{title}</h2>
        <h4>{des}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
