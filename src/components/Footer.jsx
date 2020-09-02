import React from 'react';
import '../css/Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <p>
        <strong>@{new Date().getFullYear()} </strong> Airbnb clone! No rights
        Reserved- because it's demo
      </p>
      <p>Privacy. Terms. Sitemap. Company Details</p>
    </div>
  );
}

export default Footer;
