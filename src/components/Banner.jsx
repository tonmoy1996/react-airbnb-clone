import React, { useState } from 'react';
import '../css/Banner.css';
import { Button } from '@material-ui/core';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const [showLabel, setShowLabel] = useState('Search Dates');
  return (
    <div className='banner'>
      <div className='banner_search'>
        <Button
          variant='outlined'
          onClick={() => {
            setShowSearch(!showSearch);
            setShowLabel(
              showLabel === 'Search Dates' ? 'Hide' : 'Search Dates'
            );
          }}
          className='banner_searchButton'
        >
          {showLabel}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className='banner-info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>

        <Button variant='outlined'>
          <Link to='/search'>Explore Nearby</Link>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
