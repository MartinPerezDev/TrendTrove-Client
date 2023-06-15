import Link from "next/link";

import { FaUserCircle } from "react-icons/fa";

const HeadMenu = () => {
  return (
    <div title="head" className="w-full h-auto border-b-2 border-gray-700">
      <div title="header" className="w-full h-20 flex items-center">
        <FaUserCircle className="w-20 h-20 p-1" />
        <div title="description-header" className="flex flex-col pl-2">
          <p>Bienvenido</p>
          <p className="text-xs">
            Ingresa a tu cuenta para ver tus compras, favoritos, etc.
          </p>
        </div>
      </div>
      <div title="options" className="my-4 flex text-sm">
        <Link
          href="/login"
          className="p-1 my-1 mx-1 w-1/2 text-center border border-gray-600 rounded"
        >
          Ingresa
        </Link>
        <Link
          href="/signup"
          className="p-1 my-1 mx-1 w-1/2 text-center border border-gray-600 rounded"
        >
          Crea tu cuenta
        </Link>
      </div>
    </div>
  );
};

export default HeadMenu;
