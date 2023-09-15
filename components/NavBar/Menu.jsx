import Link from "next/link";

import HeadMenu from "./HeadMenu";
import Categories from "./Categories";
import { LuPanelRightClose } from "react-icons/lu";
import { IoReceiptOutline, IoShirtOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import {MdFavoriteBorder} from "react-icons/md"

const Menu = ({ toggleMenu, user, isAdmin }) => {
  return (
    <div className="h-auto w-64 absolute my-14 bg-gray-800 p-2 flex flex-col z-10 rounded-br-md">
      <HeadMenu toggleMenu={toggleMenu} user={user} />
      {isAdmin && (
        <Link href="/dashboard" className="p-1 my-1 flex items-center">
          <LuPanelRightClose className="mr-2" />
          <p>Dashboard</p>
        </Link>
      )}
      <Link href="/" className="p-1 my-1 flex items-center">
        <AiOutlineHome className="mr-2" />
        <p>Inicio</p>
      </Link>
      <Link href="/products" className="p-1 my-1 flex items-center">
        <IoShirtOutline className="mr-2" />
        <p>Productos</p>
      </Link>
      <Categories toggleMenu={toggleMenu} />
      {user.email && (
        <>
          <Link
            href="/user/wishlist"
            onClick={toggleMenu}
            className="p-1 my-1 flex items-center"
          >
            <MdFavoriteBorder className="mr-2" />
            <p>Mis Favoritos</p>
          </Link>
          <Link
            href="/user/orders"
            onClick={toggleMenu}
            className="p-1 my-1 flex items-center"
          >
            <IoReceiptOutline className="mr-2" />
            <p>Mis Compras</p>
          </Link>
        </>
      )}
      <Link href="/about" className="p-1 my-1 flex items-center">
        <BsInfoCircle className="mr-2" />
        <p>Sobre Nosotros</p>
      </Link>
    </div>
  );
};

export default Menu;
