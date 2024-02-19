import { createContext, useState, useEffect } from 'react';
import endpoints from '../services/endpoints';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(endpoints.getAll);
      if (!response.ok) {
        throw new Error('Error while getting products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error while getting products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateProducts = (userInput) => {
    if (!userInput.length) {
      fetchProducts();
    } else {
      const newList = products?.filter((product) =>
        product.item.name.toLowerCase().includes(userInput.toLowerCase())
      );
      setProducts(newList);
    }
  };

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
