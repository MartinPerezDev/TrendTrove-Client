import Image from "next/image";

import BannerHome from "./BannerHome";
import ProductsList from "../ProductsList";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const HomeController = () => {
  return (
    <div className="">
      <div>
        <BannerHome />
        <div className="flex">
          <div className="p-2 pt-5">
            <Image
              src="https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/TrendTrove/tyika4hi8rvwvlrqh87w"
              className="rounded"
              width={150}
              height={150}
              alt="logo trendtrove"
            />
          </div>
          <div className="sm:max-w-xl">
            <h2 className="px-2 text-xl py-4 italic">
              Explora la moda con estilo en <b>TrendTrove</b>, tu paraíso de
              compras en línea.
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-5 px-2">
        <div className="flex items-center">
          <h3>Mas Comprados</h3>
          <MdOutlineKeyboardArrowDown className="text-2xl" />
        </div>
        <ProductsList />
      </div>
    </div>
  );
};

export default HomeController;
