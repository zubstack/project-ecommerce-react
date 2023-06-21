import { createContext, useState } from "react";
const ShoppingCartContext = createContext();
import { v4 as uuidv4 } from "uuid";

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

  const [shoppingCart, setShoppingCart] = useState([]);

  shoppingCart.map((product) => {
    product.key = uuidv4();
  });

  const shoppingCounter = shoppingCart.length;

  const addToShoppingCart = (newItem) => {
    const productIndex = shoppingCart.findIndex(
      (product) => product.id === newItem.id
    );
    let newShoppingCart = [];
    if (productIndex >= 0) {
      newShoppingCart = [...shoppingCart];
      newShoppingCart[productIndex].quantity++;
      console.log(newShoppingCart[productIndex].quantity);
      newShoppingCart[productIndex].price =
        newItem.price + newShoppingCart[productIndex].price;
    } else {
      newShoppingCart = [...shoppingCart, { ...newItem, quantity: 1 }];
    }
    setShoppingCart(newShoppingCart);
  };

  const removeFromShoppingCart = (item) => {
    const productIndex = shoppingCart.findIndex(
      (product) => product.id === item.id
    );
    let newShoppingCart = [...shoppingCart];
    newShoppingCart.splice([productIndex], 1);
    console.log(newShoppingCart);
    setShoppingCart(newShoppingCart);
  };

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
        addToShoppingCart,
        removeFromShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
