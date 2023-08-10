import { useContext, useEffect, useState } from "react";

import RoutesLogged from "../RoutesLogged";
import { AuthContext } from "@/context/AuthContext";
import Loading from "../Loading";
import Orders from "./Orders";

const OrdersController = () => {
  const { getOrdersUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getOrders = async () => {
      const res = await getOrdersUser();
      setOrders(res);
      setLoading(false)
    };
    getOrders();
  }, [getOrdersUser]);

  return (
    <RoutesLogged>
      {loading ? <Loading /> : <Orders orders={orders} />}
    </RoutesLogged>
  );
};

export default OrdersController;
