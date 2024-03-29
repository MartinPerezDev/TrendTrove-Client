import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { CartContext } from "@/context/cartContext";
import Loading from "@/components/Loading";
import OrderDetail from "./OrderDetail";

const OrderDetailController = () => {
  const [loading, setLoading] = useState(true);
  const { validateIdOrder } = useContext(CartContext);
  const router = useRouter();
  const { idOrder } = router.query;
  const order = useRef({});

  useEffect(() => {
    validate();
  }, [idOrder]);

  const validate = async () => {
    const res = await validateIdOrder(idOrder);
    if (res.status === 200) {
      order.current = res.data.data;
      setLoading(false);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen">
      {loading ? <Loading /> : <OrderDetail order={order.current} />}
    </div>
  );
};

export default OrderDetailController;
