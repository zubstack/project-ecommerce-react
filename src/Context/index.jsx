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

  const [favouritesList, setFavouritesList] = useState("");
  const favouritesCounter = favouritesList.length;

  return (
    <ShoppingCartContext.Provider
      value={{
        favouritesCounter,
        detailsOpen,
        openProductDetails,
        closeProductDetails,
        productToShow,
        setProductToShow,
        favouritesList,
        setFavouritesList,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
