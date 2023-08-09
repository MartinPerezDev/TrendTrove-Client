import { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";

import { CartContext } from "@/context/cartContext";
import UserController from "./Forms/UserController";
import PaymentController from "./Forms/PaymentController";

const CartOrderController = () => {
  const router = useRouter();
  const { cart, total, generateOrder } = useContext(CartContext);
  const order = useRef({});

  const [nextForm, setNextForm] = useState(false);

  const changeForm = () => setNextForm((prev) => !prev);

  const submitOrder = async (dataPayment) => {
    order.current = {
      ...order.current,
      products: [...cart],
      payment: {
        method: dataPayment.method,
        status: "completed",
        total,
      },
    };
    await generateOrder(order.current);
  };

  return (
    <div>
      {nextForm === false ? (
        <UserController order={order} changeForm={changeForm} />
      ) : (
        <PaymentController submitOrder={submitOrder} />
      )}
    </div>
  );
};

export default CartOrderController;
