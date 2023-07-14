import { useContext } from "react";

import { CartContext } from "@/context/cartContext";
import CartEmpty from "./CartEmpty";
import Cart from "./Cart";

const CartController = () => {
  const { quantity, cart, total, deleteProduct } = useContext(CartContext);

  return (
    <div className="w-full">
      {quantity === 0 ? (
        <CartEmpty />
      ) : (
        <Cart cart={cart} total={total} deleteProduct={deleteProduct} />
      )}
    </div>
  );
};

export default CartController;
