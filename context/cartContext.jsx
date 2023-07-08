import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    if (noRepeatProduct(product) === false) {
      setCart([...cart, product]);
    }
  };

  const calculateQuantity = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }, [cart]);

  const calculateTotal = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.total, 0);
  }, [cart]);

  const calculatePriceProduct = (product) => product.price * product.quantity;

  const deleteProduct = (_idVariant) => {
    const newCart = cart.filter((product) => product._idVariant !== _idVariant);
    setCart(newCart);
  };

  const noRepeatProduct = (product) => {
    const productIndex = cart.findIndex(
      (productInCart) =>
        productInCart._id === product._id &&
        productInCart._idVariant === product._idVariant
    );

    if (productIndex !== -1) {
      const newCart = cart.map((productCart, index) => {
        if (index === productIndex) {
          productCart.quantity += product.quantity;
          productCart.total = calculatePriceProduct(productCart);
        }
        return productCart;
      });
      setCart(newCart);
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        quantity: calculateQuantity,
        total: calculateTotal,
        addCart,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
