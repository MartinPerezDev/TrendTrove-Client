import Link from "next/link";

import { formatDate } from "@/utils/utilsFunctions";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiDeliveryTruck } from 'react-icons/ci';

const OrderCard = ({ order }) => {
  return (
    <Link
      href={`/user/orders/detail/${order._id}`}
      className="w-5/6 border border-gray-500 text-gray-50 my-5 rounded px-4 py-2 custom-gradient-form custom-box-shadow"
    >
      <p className="pt-2">Id: {order._id}</p>
      <p className="pt-2">A nombre de: {order.user.name}</p>
      <p className="pt-2">Fecha de compra: {formatDate(order.createdAt)}</p>
      <p className="pt-2">Total: ${order.payment.total}</p>
      <div className="flex justify-between my-5">
        <div className="border border-gray-500 rounded flex items-center justify-center px-4 bg-gray-800">
          <p>Ver mas</p>
          <MdKeyboardArrowRight size={20} />
        </div>
        <CiDeliveryTruck size={50} />
      </div>
    </Link>
  );
};

export default OrderCard;
