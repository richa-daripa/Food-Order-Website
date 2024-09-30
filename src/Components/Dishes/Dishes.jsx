import React, { useContext } from 'react';
import './Dishes.css';
import rating_starts from '../../images/rating_starts.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../Context API/context';

const Dishes = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='dishes'>
      <div className='container'>
        <img className="dishes-img" src={image} alt='' />
        {
          !cartItems[id]
            ? <button onClick={() => addToCart(id)}>+</button>
            :
            <div className="foodcounter">
              <FontAwesomeIcon icon={faSquareMinus} size="lg" style={{ color: "#ff7e14", }} onClick={() => removeFromCart(id)} />
              <p>{cartItems[id]}</p>
              <FontAwesomeIcon icon={faSquarePlus} size="lg" style={{ color: "#ff7e14", }} onClick={() => addToCart(id)} />
            </div>
        }
      </div>
      <div className="dishes-info">
        <div className="dishes-rating">
          <p>{name}</p>
          <img src={rating_starts} alt='' />
        </div>
        <p className='dishes-descrip'>{description}</p>
        <p className="dishes-price"><span>Rs</span> {price}</p>
      </div>
    </div>
  );
}

export default Dishes;