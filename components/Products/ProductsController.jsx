import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import FilterProducts from "../FilterProducts/FilterProducts";
import BannerProducts from "../BannerProducts";
import ProductsList from "../ProductsList";
import { ProductsContext } from "@/context/ProductsContext";

const ProductsController = ({ type = "all" }) => {
  const { category } = useRouter().query;
  const [productsList, setProductsList] = useState([]);
  const { products, getProductsByCategory } = useContext(ProductsContext);

  const formatTitle = (word) => word[0].toUpperCase() + word.slice(1);

  const title =
    type === "all" ? "Todos nuestros productos" : formatTitle(category);

  const changeProducts = (newProducts) => setProductsList([...newProducts]);

  useEffect(() => {
    const selectType = async () => {
      if (type === "all") {
        setProductsList([...products]);
      } else {
        setProductsList(await getProductsByCategory(category));
      }
    };

    selectType();
  }, [type, products, getProductsByCategory, category]);

  return (
    <div>
      <BannerProducts />
      <FilterProducts products={productsList} changeProducts={changeProducts} />
      <div title="header" className="flex pt-10 px-2">
        <p className="border border-gray-600 text-gray-600 px-4 py-2 rounded">
          {title}
        </p>
      </div>
      <ProductsList products={productsList} />
    </div>
  );
};

export default ProductsController;
