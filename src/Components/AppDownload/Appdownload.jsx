import React from 'react';
import './Appdownload.css';
import app_store from '../../images/app_store.png';
import play_store from '../../images/play_store.png'
import app from '../../images/app.png'

const Appdownload = () => {
  return (
    <div className='mobile-app' id='mobile-app'>
      <div className="left-content">
        <img src={app} alt="" />
      </div>
      <div className="right-content">
        <h2>Get the Eatzio app now!</h2>
        <p>Discover food wherever and whenever you want and get your food delivered on time everywhere.</p>
        <span>Download app from</span>
        <div className="download-from">
          <img src={play_store} alt="" />
          <img src={app_store} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Appdownload;