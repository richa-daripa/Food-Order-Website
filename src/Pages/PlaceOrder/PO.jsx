import React, { useContext,useState } from 'react';
import './PO.css';

import { StoreContext } from '../../Context API/context';



const PO = () => {

  const { getTotalAmount } = useContext(StoreContext);
  const [inputType, setInputType] = useState('text');

  return (
    <form className='place-order'>

      <div className="place-left">
        <h2>Shipping Address</h2>
        <div className="fields">
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Address 1' />
        <input type="text" placeholder='Address 2' />
        <div className="fields">
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='Pincode' required />
        </div>
        <div className="fields">
          <input type="text" placeholder='(+91) Mobile number' maxLength={10} />
          <input type={inputType} placeholder='Order Date & Time'  onFocus={() => setInputType('datetime-local')}
            onBlur={(e) => !e.target.value && setInputType('text')}></input>

        </div>
      </div>
      
      <div className="place-right">
        <div className="cart-total">
          <h2>Order Details</h2>
          <>
            <div className="total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalAmount()}</p>
            </div>
            <hr />
            <div className="total-details">
              <p>Delivery charges</p>
              <p>₹ {2}</p>
            </div>
            <hr />
            <div className="total-details">
              <b>Total</b>
              <b>Rs {getTotalAmount() + 2}</b>
            </div>
          </>
          <button>Payment</button>
        </div>
      </div>
    </form>
  );
}

export default PO;