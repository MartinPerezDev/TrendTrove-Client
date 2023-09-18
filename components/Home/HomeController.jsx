import { useContext } from "react";

import ProductsList from "../ProductsList";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ProductsContext } from "@/context/ProductsContext";
import BannerHomeController from "./Banner/BannerHomeController";
import StepsToBuy from "./StepsToBuy";

const HomeController = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div title="home-controller">
      <div title="head-home">
        <BannerHomeController />
        <StepsToBuy />
      </div>
      {/*
        <div className="mt-5 px-2" title="trending-products">
          <div className="flex items-center">
            <h3>Mas Comprados</h3>
            <MdOutlineKeyboardArrowDown className="text-2xl" />
          </div>
          <ProductsList products={products} trend={true} />
        </div>
      */}
    </div>
  );
};

export default HomeController;
