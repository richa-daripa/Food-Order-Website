
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/NavigationBar/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PO from './Pages/PlaceOrder/PO';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}

      <Navbar setShowLogin={setShowLogin} />
      
      <div >
        <Routes>
          <Route path='/' element={<Home />} />{/*by default path is only / but since we have used repo as Food-Ordering-App in gitHub therefore instaed of localhost 3000 use this*/}
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PO />} /> 
        </Routes>
      </div>

      <Footer />
    </>


  );
}

export default App;
