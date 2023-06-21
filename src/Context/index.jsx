import { createContext, useState } from "react";
const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const openProductDetails = () => setDetailsOpen(true);
  const closeProductDetails = () => setDetailsOpen(false);

  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  const [shoppingCart, setShoppingCart] = useState("");
  const shoppingCounter = shoppingCart.length;

  const [shoppingOpen, setShoppingOpen] = useState(false);

  const openShoppingAside = () => setShoppingOpen(true);
  const closeShoppingAside = () => setShoppingOpen(false);
  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCounter,
        detailsOpen,
        openProductDetails,
        closeProductDetails,
        productToShow,
        setProductToShow,
        shoppingCart,
        setShoppingCart,
        openShoppingAside,
        closeShoppingAside,
        shoppingOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
