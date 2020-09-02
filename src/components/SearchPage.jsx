import React from 'react';
import '../css/SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
function SearchPage() {
  return (
    <div className='searchpage'>
      <div className='searchpage_info'>
        <p>62 stays . 26 auguest to 30 auguest . 2 auguest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation</Button>
        <Button variant='outlined'>Types of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and Beds</Button>
        <Button variant='outlined'>More filters</Button>
        <SearchResult
          img='https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          location='Private room in street London'
          title='Lorem Lorem Lorem'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          star='4.75'
          price='£120/night'
          total='£120/night'
        />
        <SearchResult
          img='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          location='Private room in street London'
          title='Lorem Lorem Lorem'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          star='4.75'
          price='£120/night'
          total='£120/night'
        />
        <SearchResult
          img='https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          location='Private room in street London'
          title='Lorem Lorem Lorem'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          star='4.75'
          price='£120/night'
          total='£120/night'
        />
        <SearchResult
          img='https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          location='Private room in street London'
          title='Lorem Lorem Lorem'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          star='4.75'
          price='£120/night'
          total='£120/night'
        />
        <SearchResult
          img='https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          location='Private room in street London'
          title='Lorem Lorem Lorem'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          star='4.75'
          price='£120/night'
          total='£120/night'
        />
        <SearchResult
          img='https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          location='Private room in street London'
          title='Lorem Lorem Lorem'
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          star='4.75'
          price='£120/night'
          total='£120/night'
        />
      </div>
    </div>
  );
}

export default SearchPage;
