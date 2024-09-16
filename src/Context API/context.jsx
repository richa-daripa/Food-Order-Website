import { createContext, useState } from "react";
import { food_item } from "../images/food_list";

export const StoreContext = createContext(null);

const StoreProvider = (props) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const i in cartItems) {
      if (cartItems[i] > 0) {
        let info = food_item.find((product) => product._id === i)
        totalAmount += info.price * cartItems[i];
      }

    }
    return totalAmount;
  }

  const contextValue = {
    food_item,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;