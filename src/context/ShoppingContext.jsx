/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  //Product on Details :
  const [productOnDetails, setproductOnDetails] = useState({});

  //Shopping Cart & Counter
  const [shoppingCart, setShoppingCart] = useState([]);
  const shoppingCounter = shoppingCart.length;

  //Add the property key to each product *
  shoppingCart.map((product) => {
    product.key = uuidv4();
  });

  //Shopping Cart Aside :
  const [shoppingOpen, setShoppingOpen] = useState(false);
  const openShoppingAside = () => setShoppingOpen(true);
  const closeShoppingAside = () => setShoppingOpen(false);

  //Shopping Aside • CRUD:
  const addToShoppingCart = (newItem) => {
    let newShoppingCart = [];
    const productRepeated = shoppingCart.find(
      (product) => product.id === newItem.id
    );
    if (!productRepeated) {
      newShoppingCart = [...shoppingCart, { ...newItem, quantity: 1 }];
      setShoppingCart(newShoppingCart);
    } else {
      removeFromShoppingCart(newItem.id);
    }
  };

  const removeFromShoppingCart = (item) => {
    const productIndex = shoppingCart.findIndex(
      (product) => product.id === item.id
    );
    let newShoppingCart = [...shoppingCart];
    newShoppingCart.splice([productIndex], 1);
    setShoppingCart(newShoppingCart);
  };

  const showTotalPrice = () =>
    shoppingCart.reduce((total, product) => total + product.item.price, 0);
  // Orders: =====================================================
  const [orders, setOrders] = useState([]);

  // Checkout Products:
  const handleCheckout = () => {
    const date = new Date();

    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: showTotalPrice().toFixed(2),
    };
    setOrders([...orders, orderToAdd]);
    setShoppingCart([]);
    // closeShoppingAside();
    // console.log(orders.length);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        productOnDetails,
        setproductOnDetails,

        shoppingOpen,
        openShoppingAside,
        closeShoppingAside,

        shoppingCounter,
        shoppingCart,
        setShoppingCart,
        addToShoppingCart,
        removeFromShoppingCart,
        showTotalPrice,

        orders,
        setOrders,
        handleCheckout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
