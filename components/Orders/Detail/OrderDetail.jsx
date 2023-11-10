import Link from "next/link";

import BoxForm from "@/components/BoxForm";
import { formatDate } from "@/utils/utilsFunctions";
import GenericProductCard from "@/components/GenericProductCard";

const OrderDetail = ({ order }) => {
  return (
    <BoxForm type="order-success">
      <div className="w-full h-full py-5 px-2">
        <h2 className="py-5 text-xl">Gracias por su compra!</h2>
        <h3 className="pb-4">
          <b>Fecha de compra: </b>
          {formatDate(order.createdAt)}
        </h3>
        <h3 className="pb-4">
          <b>Guarde el id de su orden: </b>
          {order._id}
        </h3>
        <h3 className="pb-4">
          <b>Dirección de entrega: </b>
          {order.user.address}
        </h3>
        <h3 className="pb-4">
          <b>Listado de productos</b>
        </h3>
        {order.products.map((product, index) => (
          <GenericProductCard key={product.name + index} {...product} />
        ))}
        <p className="pt-5">
          <b>Total de compra: </b>${order.payment.total}
        </p>
        <div className="flex flex-col py-5">
          <Link href="/" className="flex">
            <p className="border-2 py-3 px-2 my-4 rounded-md border-none text-gray-200 bg-gray-900">
              Seguir comprando
            </p>
          </Link>
          <Link href="/user/orders" className="flex">
            <p className="border-2 py-3 px-2 my-4 rounded-md border-none text-gray-200 bg-gray-900">
              Ver mis otras compras
            </p>
          </Link>
        </div>
      </div>
    </BoxForm>
  );
};

export default OrderDetail;
