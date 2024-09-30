import React, { useContext, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png';
import { StoreContext } from '../../Context API/context';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';


const Navbar = ({ setShowLogin }) => {

  //const [highlight, setHighlight] = useState("");
  const { getTotalAmount } = useContext(StoreContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='navbar'>
      <RouterLink to='/'><img src={logo} alt='' className='logo' /></RouterLink>

      <ul className="navbar-menu">
        {/*
        <Link to="/"><li onClick={() => setHighlight("home")} className={highlight === 'home' ? 'active' : ""}>Home</li></Link>
        <li onClick={() => setHighlight("menu")} className={highlight === 'menu' ? 'active' : ""}><a href="#explore-menu">Menu</a></li>
        <li onClick={() => setHighlight("mobapp")} className={highlight === 'mobapp' ? 'active' : ""}><a href="#mobile-app">Mobile App</a></li>
        <li onClick={() => setHighlight("contact")} className={highlight === 'contact' ? 'active' : ""}><a href="#footer">Contact</a></li>*/}

        <ScrollLink to='header' spy={true} offset={-100} smooth={true} duration={500}><li>About</li></ScrollLink>
        <ScrollLink to='explore-menu' spy={true} offset={-100} smooth={true} duration={500}><li>Menu</li></ScrollLink>
        <ScrollLink to='mobile-app' spy={true} offset={-100} smooth={true} duration={500}><li>App</li></ScrollLink>
        <ScrollLink to='footer' spy={true} offset={-100} smooth={true} duration={500}><li>Contact</li></ScrollLink>
      </ul>
      
      <div className="navbar-right">
        <div className="navbar-basket">
          {
            getTotalAmount() === 0 ?
              <RouterLink to="/cart"><FontAwesomeIcon icon={faBagShopping} size="xl" /></RouterLink>
              : <RouterLink to="/cart"><FontAwesomeIcon icon={faBagShopping} size="xl" bounce /></RouterLink>
          }

          {/*<div className={getTotalAmount() === 0 ? "" : "dot"}></div>*/}
        </div>
        <button onClick={() => setShowLogin(true)}>Login</button>


        <FontAwesomeIcon icon={faBars} className='ham-menu' onClick={() => setShowMenu(!showMenu)} />
        <ul className="mob-navbar-menu" style={{ display: showMenu ? 'flex' : 'none' }}>
          <ScrollLink to='header' spy={true} offset={-100} smooth={true} duration={500}><li onClick={() => setShowMenu(false)}>About</li></ScrollLink>
          <ScrollLink to='explore-menu' spy={true} offset={-100} smooth={true} duration={500}><li onClick={() => setShowMenu(false)}>Menu</li></ScrollLink>
          <ScrollLink to='mobile-app' spy={true} offset={-100} smooth={true} duration={500}><li onClick={() => setShowMenu(false)}>App</li></ScrollLink>
          <ScrollLink to='footer' spy={true} offset={-100} smooth={true} duration={500}><li onClick={() => setShowMenu(false)}>Contact</li></ScrollLink>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
