import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context API/context';
import Dishes from '../Dishes/Dishes';




const FoodDisplay = ({ category }) => {

  const { food_item } = useContext(StoreContext)

  return (
    <div className='food_display'>
      <h2>WHAT WE SERVE</h2>
      <div className="food-display-list">
        {
          food_item.map((item, index) => {
            if (category === 'All' || category === item.category) {
              return <Dishes key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} />
            }
          })
        }
      </div>
    </div>
  );
}

export default FoodDisplay;