import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CartWidget from "./CartWidget";
import Menu from "./Menu";
import { FiMenu } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { AuthContext } from "@/context/AuthContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdmin, user } = useContext(AuthContext);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="bg-gray-900 sticky top-0 z-10 select-none">
      <nav className="h-14 max-w-screen-xl mx-auto flex text-gray-100">
        {isMenuOpen && (
          <Menu toggleMenu={toggleMenu} user={user} isAdmin={isAdmin} />
        )}
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
            quality={50}
            width={500}
            height={500}
          />
          <p className="px-2">TrendTrove</p>
        </Link>
        <div className="flex ml-auto">
          <div className="h-14 w-10 flex items-center mx-1 cursor-pointer">
            <Link href="/user/favorites" className="h-9 w-9 p-1">
              <MdFavoriteBorder className="h-full w-full" />
            </Link>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
