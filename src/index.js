import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import StoreProvider from './Context API/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);


