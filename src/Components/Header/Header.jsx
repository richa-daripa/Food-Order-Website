import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className="header-content">
        <h2>Enjoy Our <br />Delicious Food</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your eating experience, one delicious meal at a time.</p>
        <button>View More</button>
      </div>

    </div>
  );
}

export default Header;