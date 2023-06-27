import { useContext } from "react";

import { ProductsContext } from "@/context/ProductsContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className= "flex flex-wrap pt-5">
      {products.map((product) => (
        <ProductCard key={product._id} {...product}/>
      ))}
    </div>
  );
};

export default ProductsList;
