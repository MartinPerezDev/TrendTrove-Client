import { useContext } from "react";

import { ProductsContext } from "@/context/ProductsContext";
import ProductsList from "../ProductsList";

const ProductsController = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="p-2">
      <h2 className="pt-10">Todos nuestros productos</h2>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsController;
