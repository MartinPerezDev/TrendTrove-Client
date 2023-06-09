import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const URL_API = "http://192.168.0.23:8080"
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      await axios.post(`${URL_API}/api/products`, product);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await axios.get(`${URL_API}/api/products`);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
