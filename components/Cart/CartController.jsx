import { useContext, useEffect } from "react";

import { CartContext } from "@/context/cartContext";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import CartEmpty from "./CartEmpty";
import Cart from "./Cart";

const CartController = () => {
  const { quantity, cart, total, deleteProduct } = useContext(CartContext);
  const router = useRouter();

  const enviar = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
      ],
    });
  };

  useEffect(() => {
    if (quantity === 0) {
    }
  }, []);

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
