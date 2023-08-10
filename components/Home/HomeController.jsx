import { useContext } from "react";
import Image from "next/image";

import BannerHome from "./BannerHome";
import ProductsList from "../ProductsList";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ProductsContext } from "@/context/ProductsContext";

const HomeController = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div title="home-controller">
      <div title="head-home">
        <BannerHome />
        <div className="flex">
          <div className="p-2 pt-5">
            <Image
              src="https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/TrendTrove/tyika4hi8rvwvlrqh87w"
              width={150}
              height={150}
              loading="lazy"
              quality={50}
              alt="logo trendtrove"
              className="rounded"
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
      <div className="mt-5 px-2" title="trending-products">
        <div className="flex items-center">
          <h3>Mas Comprados</h3>
          <MdOutlineKeyboardArrowDown className="text-2xl" />
        </div>
        <ProductsList products={products} trend={true} />
      </div>
    </div>
  );
};

export default HomeController;
