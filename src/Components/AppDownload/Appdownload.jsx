import React from 'react';
import './Appdownload.css';
import app_store from '../../images/app_store.png';
import play_store from '../../images/play_store.png'

const Appdownload =()=> {
  return (
    <div className='mobile-app' id='mobile-app'>
     <p>Download the Mobile<br></br>App now</p>
       <div className="download-from">  
            <img src={play_store} alt="" />
            <img src={app_store} alt="" />
        </div> 
    </div>
  );
}

export default Appdownload;