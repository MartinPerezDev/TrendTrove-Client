import { useMemo } from "react";

import ProductCard from "./ProductCard";
import Loading from "./Loading";

const ProductsList = ({ products, trend = false }) => {

  const listProducts = useMemo(() => {
    if (trend === true) {
      return products.filter((product) => product.trending !== false);
    } else {
      return products;
    }
  }, [products, trend]);

  return (
    <>
      {products.length !== 0 ? (
        <div className="flex flex-wrap pt-5">
          {listProducts.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductsList;
