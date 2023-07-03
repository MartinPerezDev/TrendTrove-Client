import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addCart = (product) => {
    console.log([...cart, product]);
    setCart([...cart, product]);
  }
  
  return (
    <CartContext.Provider value={{ addCart }}>
      {children}
    </CartContext.Provider>
  );
};
