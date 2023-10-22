import Link from "next/link";

import { BiStoreAlt } from "react-icons/bi";

const CartEmpty = () => {
  return (
    <div className="w-full h-96 py-96 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-gray-400">
        <BiStoreAlt className=" w-32 h-32" />
        <p className="text-xl">No hay productos en el carrito</p>
        <p className="italic ">
          Agregue productos para poder seguir con su compra
        </p>
        <Link
          href="/products"
          className="border-2 border-gray-600 text-gray-200 bg-gray-900 rounded px-4 py-2 mt-5"
        >
          Ver productos
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
