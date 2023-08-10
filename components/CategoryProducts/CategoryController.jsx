import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ProductsContext } from "@/context/ProductsContext";
import ProductsList from "../ProductsList";

const CategoryController = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const { getProductsByCategory } = useContext(ProductsContext);

  const firstCapitalLetter = (word) => word[0].toUpperCase() + word.slice(1);

  const getProducts = async () => {
    const res = await getProductsByCategory(category);
    setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div className="p-2">
      <div title="header" className="flex pt-10">
        <p className="border border-gray-600 text-gray-600 px-4 py-2 rounded">
          {firstCapitalLetter(category)}
        </p>
      </div>
      <div title="body">
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default CategoryController;
