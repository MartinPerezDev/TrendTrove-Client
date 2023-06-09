import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import CartWidget from "./CartWidget";

const Menu = () => {
  const menuOptions = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Hombres",
      path: "/hombres",
    },
    {
      name: "Mujeres",
      path: "/mujeres",
    },
  ];

  return (
    <div className="h-auto w-60 absolute my-14 bg-gray-800 p-2 flex flex-col z-10">
      {menuOptions.map((menuOption, index) => (
        <Link
          key={menuOption.name + index}
          href={menuOption.path}
          className="p-1 my-1"
        >
          {menuOption.name}
        </Link>
      ))}
    </div>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="h-14 w-full bg-gray-900 flex text-gray-100">
      {isMenuOpen && <Menu />}
      <div className="h-14 w-10 flex items-center mx-4 cursor-pointer">
        <div
          className="h-9 w-9 p-1 border border-gray-100 rounded"
          onClick={toggleMenu}
        >
          <FiMenu className="h-full w-full" />
        </div>
      </div>
      <Link href="/" className="h-14 flex items-center">
        <Image
          src="https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/TrendTrove/tyika4hi8rvwvlrqh87w"
          className="h-9 w-9 rounded"
          alt="logo trendtrove"
          loading="lazy"
          quality={80}
          width={500}
          height={500}
        />
        <p className="px-2">TrendTrove</p>
      </Link>
      <div className="flex ml-auto">
        <div className="h-14 w-10 flex items-center mx-4 cursor-pointer">
          <div className="h-9 w-9 p-1">
            <MdFavoriteBorder className="h-full w-full" />
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
