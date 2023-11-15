import { useContext } from "react";
import Link from "next/link";

import { AuthContext } from "@/context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const HeadMenu = ({ toggleMenu, user }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    toggleMenu();
  };

  const styleLink =
    "p-1 my-1 mx-1 w-1/2 text-center border border-gray-600 rounded hover:cursor-pointer hover:bg-gray-900";

  return (
    <>
      <div title="head" className="w-full h-auto border-b-2 border-gray-700">
        <div title="header" className="w-full h-20 flex items-center">
          <FaUserCircle className="w-20 h-20 p-1" />
          <div title="description-header" className="flex flex-col pl-2">
            <p>Bienvenido {user.name}</p>
            <p className="text-xs">
              {user.name
                ? "Explora tu cuenta y descubre tus selecciones, favoritos y más."
                : "Ingresa a tu cuenta para ver tus compras, favoritos, etc."}
            </p>
          </div>
        </div>
        <div title="options" className="my-4 flex text-sm">
          {user.name ? (
            <>
              <div className={styleLink} onClick={handleLogout}>
                Cerrar sesion
              </div>
            </>
          ) : (
            <>
              <Link
                href={{
                  pathname: "/user/authentication",
                  query: { type: "login" },
                }}
                className={styleLink}
                onClick={toggleMenu}
              >
                Ingresa
              </Link>
              <Link
                href={{
                  pathname: "/user/authentication",
                  query: { type: "signup" },
                }}
                className={styleLink}
                onClick={toggleMenu}
              >
                Crea tu cuenta
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HeadMenu;
