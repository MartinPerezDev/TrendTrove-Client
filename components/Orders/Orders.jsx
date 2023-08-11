import React from "react";
import { IoReceiptOutline } from "react-icons/io5";
import OrderCard from "./OrderCard";
import OrdersEmpty from "./OrdersEmpty";

const Orders = ({ orders }) => {
  return (
    <div className="p-2 my-5">
      {orders.length !== 0 ? (
        <>
          <div className="flex items-center text-xl">
            <IoReceiptOutline className="mr-2" />
            <p>Listado de ordenes</p>
          </div>
          <div className="flex flex-col items-center">
            {orders.map((order, index) => (
              <OrderCard key={order._id + index} order={order} />
            ))}
          </div>
        </>
      ) : (
        <OrdersEmpty />
      )}
    </div>
  );
};

export default Orders;
