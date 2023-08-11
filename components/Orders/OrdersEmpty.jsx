import Link from "next/link"
import { HiOutlineNewspaper } from "react-icons/hi"

const OrdersEmpty = () => {
  return (
    <div className="w-full h-96 py-96 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-gray-400">
        <HiOutlineNewspaper className=" w-32 h-32" />
        <p className=" text-xl">No hay ordenes registradas a su cuenta</p>
        <p className="italic ">
          realice alguna compra para poder visualizarlas
        </p>
        <Link
          href="/"
          className="border-2 border-gray-600 text-gray-200 bg-gray-900 rounded px-4 py-2 mt-5"
        >
          Ver productos
        </Link>
      </div>
    </div>
  )
}

export default OrdersEmpty