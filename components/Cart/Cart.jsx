import { BsFillTrash3Fill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Cart = ({ cart, total, deleteProduct }) => {
  return (
    <div className="px-3 pt-5 min-h-screen">
      <h2 className="text-xl pt-4">Listado de compra</h2>
      <p className="text-gray-500 pt-2 italic text-sm">
        Revise bien su compra antes de continuar
      </p>
      {cart.map((product, index) => (
        <div
          className="border-2 rounded py-2 px-4 text-sm italic mt-4 relative "
          style={{
            backgroundImage: `url(${product.image[0]})`,
            backgroundSize: "30%",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
          key={product.name + index}
        >
          <div
            title="trash"
            onClick={() => deleteProduct(product._idVariant)}
            className="absolute right-0 top-0 rounded bg-red-500 w-10 h-10"
          >
            <BsFillTrash3Fill className="w-10 h-10 p-2" color="white" />
          </div>
          <p className="text-base font-bold not-italic">{product.name}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Talle: {product.size}</p>
          <p>Precio unitario: ${product.price}</p>
          <p>Precio total: ${product.total}</p>
        </div>
      ))}
      <p className="pt-5">Total de compra: ${total}</p>
      <div className="flex">
        <div className="border-2 border-gray-600 text-gray-200 bg-gray-900 rounded px-4 py-2 mt-5 flex justify-center items-center">
          Continuar con la compra
          <IoIosArrowForward className="mx-1" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
