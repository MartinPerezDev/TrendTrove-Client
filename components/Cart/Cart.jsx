import Link from "next/link";

import { BsFillTrash3Fill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Cart = ({ cart, total, deleteProduct }) => {
  return (
    <div className="px-3 pt-5 w-full min-h-screen">
      <h2 className="text-xl pt-4">Listado de compra</h2>
      <p className="text-gray-500 pt-2 italic text-sm">
        Revise bien su compra antes de continuar
      </p>
      {cart.map(({images, name, _idVariant, quantity, size, price, total}, index) => (
        <div
          className="border-2 rounded py-2 px-4 text-sm italic mt-4 relative "
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundSize: "30%",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
          key={name + index}
        >
          <div
            title="trash"
            onClick={() => deleteProduct(_idVariant)}
            className="absolute right-0 top-0 rounded bg-red-500 w-10 h-10"
          >
            <BsFillTrash3Fill className="w-10 h-10 p-2" color="white" />
          </div>
          <p className="text-base font-bold not-italic">{name}</p>
          <p>Cantidad: {quantity}</p>
          <p>Talle: {size}</p>
          <p>Precio unitario: ${price}</p>
          <p>Precio total: ${total}</p>
        </div>
      ))}
      <p className="pt-5">Total de compra: ${total}</p>
      <div className="flex flex-col w-4/6 justify-center items-start">
        <Link
          href="/cart/order"
          className="border-2 border-gray-600 text-gray-200 bg-gray-900 rounded px-4 py-2 mt-5 flex justify-center items-center"
        >
          Continuar con la compra
          <IoIosArrowForward className="mx-1" />
        </Link>
        <Link
          href="/"
          className="border-2 border-gray-600 text-gray-200 bg-gray-900 rounded px-4 py-2 mt-5 flex justify-center items-center"
        >
          Añadir mas productos
          <IoIosArrowForward className="mx-1" />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
