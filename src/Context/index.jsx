import { createContext, useState } from "react";
const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const openProductDetails = () => setDetailsOpen(true);
  const closeProductDetails = () => setDetailsOpen(false);

  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        detailsOpen,
        openProductDetails,
        closeProductDetails,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
