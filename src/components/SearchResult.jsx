import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../css/SearchResult.css';
import StarIcon from '@material-ui/icons/Star';
function SearchResult({ img, location, title, des, star, price, total }) {
  return (
    <div className='searchResult'>
      <img src={img} alt='' />
      <FavoriteBorderIcon className='searchResult_heart' />
      <div className='searchResult_info'>
        <div className='searchResult_infoTop'>
          <p>{location}</p>
          <h1>{title}</h1>
          <p>__________</p>
          <p>{des}</p>
        </div>
        <div className='searchResult_infoBottom'>
          <div className='searchResult_stars'>
            <StarIcon className='stars' />
            <strong>{star}</strong>
          </div>
          <div className='searchResult_price'>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
