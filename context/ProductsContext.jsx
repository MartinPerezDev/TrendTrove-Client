import { createContext, useEffect, useState } from "react";

import axios from "axios";
import axiosApiTrendTrove from "@/utils/axiosConfig";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    {
      name: "Remeras",
      value: "remeras",
    },
    {
      name: "Zapatillas",
      value: "zapatillas",
    },
    {
      name: "Camperas",
      value: "camperas",
    },
    {
      name: "Gorras",
      value: "gorras",
    },
  ]);

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

  const delayLoading = () => {
    setLoadingProducts(false);
  }

  const getProducts = async () => {
    try {
      const res = await axiosApiTrendTrove.get("/api/products");
      delayLoading()
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
  }

  return (
    <ProductsContext.Provider value={{ products, categories, loadingProducts, addProduct, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
};
