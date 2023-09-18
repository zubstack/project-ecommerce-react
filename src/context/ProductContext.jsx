// ProductContext.js
import { createContext, useContext, useState, useEffect } from "react";
import endpoints from "../services/endpoints";

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(endpoints.getAll);
      if (!response.ok) {
        throw new Error("Error while getting products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error while getting products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateProducts = (newListProducts) => {
    setProducts(newListProducts);
  };

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
