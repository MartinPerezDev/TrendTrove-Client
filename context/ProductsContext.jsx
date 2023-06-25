import { createContext, useEffect, useState } from "react";

import axios from "axios";
import axiosApiTrendTrove from "@/utils/axiosConfig";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      return await axiosApiTrendTrove.post('/api/products', product);
    } catch (error) {
      throw new Error('No esta authorizado para realizar esta accion');
    }
  };

  const getProducts = async () => {
    try {
      const res = await axiosApiTrendTrove.get('/api/products');
      setProducts(res.data.data);
    } catch (error) {
      return
    }
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
