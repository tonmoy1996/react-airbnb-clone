import React from 'react';
import '../css/header.css';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img src='air.png' className='header_icon' alt='airbnb' />
      </Link>
      <div className='header_center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header_right'>
        <p>Becoming a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
