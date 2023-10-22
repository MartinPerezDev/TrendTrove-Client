import { createContext, useMemo, useState } from "react";
import { useRouter } from "next/router";

import axiosApiTrendTrove from "@/utils/axiosConfig";
import { notify } from "@/utils/notificationToastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const router = useRouter()

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

  const deleteProduct = (e, _idVariant) => {
    e.preventDefault()
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

  const resetCart = () => setCart([])

  const generateOrder = async(order) => {
    try {
      const res = await axiosApiTrendTrove.post("/api/orders", order);
      if(res.status !== 201) throw Error
      resetCart()
      router.push(`/user/orders/detail/${res.data.data._id}`)
    } catch (error) {
      console.log(error)
      notify({}, "error", "Hubo un error al generar su orden");
    }
  }

  const validateIdOrder = async(idOrder) => {
    try {
      const res = await axiosApiTrendTrove.get(`/api/orders/${idOrder}`);
      if(res.status !== 200) throw Error
      return res
    } catch (error) {
      return false
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        quantity: calculateQuantity,
        total: calculateTotal,
        addCart,
        deleteProduct,
        generateOrder,
        validateIdOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
