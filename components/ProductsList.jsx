import { useContext, useMemo } from "react";

import { ProductsContext } from "@/context/ProductsContext";
import ProductCard from "./ProductCard";

const ProductsList = ({ trend = false }) => {
  const { products } = useContext(ProductsContext);
  
  const listProducts = useMemo(() => {
    if (trend === true) {
      return products.filter((product) => product.trending !== false);
    } else {
      return products;
    }
  }, [products, trend]);

  return (
    <div className="flex flex-wrap pt-5">
      {listProducts.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
