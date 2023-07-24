import { useRouter } from "next/router";

const Success = ({ order }) => {
  const router = useRouter();

  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };

  const reedirection = (path) => {
    router.push(path);
  }

  return (
    <div className="w-full h-full py-5 px-2">
      <h2 className="py-5">Orden generada con exito</h2>
      <h3 className="pb-2">
        <b>Fecha de compra: </b>
        {formatDate(order.createdAt)}
      </h3>
      <h3 className="pb-2">
        <b>Guarde el id de su orden: </b>
        {order._id}
      </h3>
      <h3 className="pb-2">
        <b>Dirección de entrega: </b>
        {order.user.address}
      </h3>
      <h3 className="pb-2">
        <b>Listado de productos</b>
      </h3>
      {order.products.map((product, index) => (
        <div
          className="border-2 rounded py-2 px-4 text-sm italic mt-4 relative "
          style={{
            backgroundImage: `url(${product.images[0]})`,
            backgroundSize: "30%",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
          key={product.name + index}
        >
          <p className="text-base font-bold not-italic">{product.name}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Talle: {product.size}</p>
          <p>Precio unitario: ${product.price}</p>
          <p>Precio total: ${product.total}</p>
        </div>
      ))}
      <p className="pt-5">
        <b>Total de compra: </b>${order.payment.total}
      </p>
      <div className="flex flex-col ">
        <div className="flex" onClick={()=> reedirection("/")} >
          <p className="border-2 p-1 px-2 my-4 rounded text-gray-200 border-gray-400 bg-gray-900">
            Seguir comprando
          </p>
        </div>
        <div className="flex" onClick={()=> reedirection("/profile/orders")}>
          <p className="border-2 p-1 px-2 my-4 rounded text-gray-200 border-gray-400 bg-gray-900">
            Ver mis otras compras
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
