import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="content">
                <div className="content-left">
                    <img src={logo} alt='' />
                    <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. </p>
                    <div className="social-link">
                        <FontAwesomeIcon icon={faFacebook}  className='icon' />
                        <FontAwesomeIcon icon={faXTwitter}  className='icon' />
                        <FontAwesomeIcon icon={faWhatsapp}  className='icon' />
                    </div>
                </div>
                <div className="content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Menu</li>
                        <li>Delivery</li>
                    </ul>
                </div>
                <div className="content-center">
                    <h2>Support</h2>
                    <ul>
                        <li>Feedback</li>
                        <li>FAQ</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faPhone} id='icons' />+91 785-412-8327</li>
                        <li><FontAwesomeIcon icon={faEnvelope} id='icons' />foodordering@Eatzio.com</li>
                        <li><FontAwesomeIcon icon={faLocationDot} id='icons' />Food Ordering Service, 42nd Living St, 43043 New Delhi, India</li>
                    </ul>
                </div>
            </div>

            <hr></hr>
            <p className='copyright'>Copyright 2024 © Eatzio.com | All rights reserved.</p>

        </div>
    );
}

export default Footer;