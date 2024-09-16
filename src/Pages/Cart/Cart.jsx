import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context API/context';
import { useNavigate } from 'react-router-dom';



const Cart = () => {

  const { cartItems, food_item, removeFromCart, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="heading">
          <p>Food</p>
          <p>Dish name</p>
          <p>Price</p>
          <p>Quant.</p>
          <p>Total</p>
        </div>

        <br />

        <hr />

        {
          food_item.map((i, index) => {
            if (cartItems[i._id] > 0) {
              return (
                <>
                  <div className="food-ordered heading">
                    <img src={i.image} alt="" />
                    <p>{i.name}</p>
                    <p>₹ {i.price}</p>
                    <p>{cartItems[i._id]}</p>
                    <p>₹ {i.price * cartItems[i._id]}</p>
                    <button onClick={() => removeFromCart(i._id)}>Delete</button>
                  </div>

                  <hr />
                </>

              )
            }
          })
        }
      </div>

      <div className="cart-bottom">
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
          <button onClick={() => navigate('/order')}>Place Order</button>
        </div>

        <div className="promocode">
          <p>Enter your coupon code here</p>
          <div className="promo-input">
            <input type="text" placeholder='COUPON CODE' />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;