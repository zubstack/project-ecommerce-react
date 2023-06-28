import { createContext, useEffect, useState } from "react";
const ShoppingCartContext = createContext();
import { v4 as uuidv4 } from "uuid";
import useFetch from "../Hooks/useFetch";
import { urlApi } from "../Data";

const ShoppingCartProvider = ({ children }) => {
  //Items from the API ♦:

  const items = useFetch(`${urlApi}/products`);

  //Product Details ♦:
  //State • Open/Close
  const [detailsOpen, setDetailsOpen] = useState(false);

  // Functions • Open/Close

  const openProductDetails = () => setDetailsOpen(true);
  const closeProductDetails = () => setDetailsOpen(false);

  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  //Shopping Aside ♦:

  //State • Open/Close

  const [shoppingOpen, setShoppingOpen] = useState(false);

  // Functions • Open/Close

  const openShoppingAside = () => setShoppingOpen(true);
  const closeShoppingAside = () => setShoppingOpen(false);

  //Shopping Cart & Counter

  const [shoppingCart, setShoppingCart] = useState([]);
  const shoppingCounter = shoppingCart.length;

  //Add the property key to each product *

  shoppingCart.map((product) => {
    product.key = uuidv4();
  });

  //Shopping Aide • CRUD:

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

  const showTotalPrice = () =>
    shoppingCart.reduce((total, product) => total + product.price, 0);

  // Orders • State:
  const [orders, setOrders] = useState([]);

  // Checkout Products:
  const handleCheckout = () => {
    const date = new Date();

    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: showTotalPrice(),
    };
    setOrders([...orders, orderToAdd]);
    setShoppingCart([]);
    closeShoppingAside();
    console.log(orders.length);
  };

  // User Search ♦:
  //User input:
  // const [userInput, setUserInput] = useState("");
  // const [filteredItems, setFilteredItems] = useState("");

  // const filterItems = (items, userInput) => {
  //   return items?.filter((item) =>
  //     item.title.toLowerCase().includes(userInput.toLowerCase())
  //   );
  // };

  // useEffect(() => {
  //   if (userInput) setFilteredItems(filterItems(items, userInput));
  // }, [items, userInput]);

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
        showTotalPrice,
        handleCheckout,
        orders,
        setOrders,
        items,
        // userInput,
        // setUserInput,
        // filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
