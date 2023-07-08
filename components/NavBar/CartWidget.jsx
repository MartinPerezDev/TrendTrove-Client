import { useContext } from "react";

import { BsBag } from "react-icons/bs";
import { CartContext } from "@/context/cartContext";
import Link from "next/link";

const CartWidget = () => {
  const { quantity } = useContext(CartContext);

  return (
    <Link href="/cart" className="h-14 w-10 flex items-center mx-1 cursor-pointer">
      <div className="h-9 w-auto p-1 flex items-end justify-evenly">
        <BsBag className="h-full w-full" />
        <p className="text-xs absolute p-0.5">{quantity !=0 && quantity}</p>
      </div>
    </Link>
  );
};

export default CartWidget;
