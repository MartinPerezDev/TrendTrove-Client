import { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@/context/AuthContext";
import {
  validateOrderPaymentForm,
  validateOrderUserForm,
} from "@/utils/validationsYup";
import { notify } from "@/utils/notificationToastify";
import { CartContext } from "@/context/cartContext";
import PaymentForm from "./PaymentForm";
import UserDataForm from "./UserDataForm";

const CartOrderController = () => {
  const router = useRouter();
  const { cart, total, generateOrder } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const order = useRef({});

  const [form, setForm] = useState("user");
  const [dataUserOrder, setDataUserOrder] = useState({
    name: user.name ? user.name : "",
    email: user.email ? user.email : "",
    address: "",
  });
  const [dataPaymentOrder, setDataPaymentOrder] = useState({
    method: "",
    cardName: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });

  const handleInputChangeUser = (e) => {
    setDataUserOrder({
      ...dataUserOrder,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangePayment = (e) => {
    setDataPaymentOrder({
      ...dataPaymentOrder,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrderUser = async (e) => {
    e.preventDefault();
    const res = await validateOrderUserForm(dataUserOrder);
    if (res === true) {
      order.current = {
        user: { ...dataUserOrder },
        products: [...cart],
      };
      setForm("payment");
    } else {
      notify({}, "error", res);
    }
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    const res = await validateOrderPaymentForm(dataPaymentOrder);
    if (res === true) {
      order.current = {
        ...order.current,
        payment: {
          method: dataPaymentOrder.method,
          status: "completed",
          total,
        },
      };
      await generateOrder(order.current);
    } else {
      notify({}, "error", res);
    }
  };

  if (cart.length === 0) router.push("/");

  return (
    <div>
      {form === "user" ? (
        <UserDataForm
          dataUserOrder={dataUserOrder}
          handleOrderUser={handleOrderUser}
          handleInputChangeUser={handleInputChangeUser}
        />
      ) : (
        <PaymentForm
          submitOrder={submitOrder}
          handleInputChangePayment={handleInputChangePayment}
        />
      )}
    </div>
  );
};

export default CartOrderController;
