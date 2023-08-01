import { createContext, useEffect, useRef, useState } from "react";

import axiosApiTrendTrove from "@/utils/axiosConfig";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const categories = useRef(['Remeras', 'Zapatillas', 'Camperas', 'Gorras']);

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      return await axiosApiTrendTrove.post("/api/products", product);
    } catch (error) {
      throw new Error("No esta authorizado para realizar esta accion");
    }
  };

  const getProducts = async () => {
    try {
      const res = await axiosApiTrendTrove.get("/api/products");
      setLoadingProducts(false);
      setProducts(res.data.data);
    } catch (error) {
      return;
    }
  };

  const getProductById = async (id) => {
    try {
      const res = await axiosApiTrendTrove.get(`/api/products/${id}`);
      return res.data.data;
    } catch (error) {
      return;
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories: categories.current,
        loadingProducts,
        addProduct,
        getProductById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
