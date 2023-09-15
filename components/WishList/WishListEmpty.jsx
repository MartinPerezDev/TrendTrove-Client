import Link from "next/link";

import { BsFillBagHeartFill } from "react-icons/bs";

const WishListEmpty = () => {
  return (
    <div className="w-full h-96 py-96 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-gray-400">
        <BsFillBagHeartFill className="w-32 h-32 p-3" />
        <p className=" text-xl">No hay productos en su lista de favoritos</p>
        <p className="italic">
          Guardelos para no perderlos de vista
        </p>
        <Link
          href="/products"
          className="border-2 border-gray-600 text-gray-200 bg-gray-900 rounded px-4 py-2 mt-5"
        >
          Ver productos
        </Link>
      </div>
    </div>
  )
}

export default WishListEmpty