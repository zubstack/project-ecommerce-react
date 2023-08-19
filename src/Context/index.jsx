import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  //Product on Details : ================================================
  const [productOnDetails, setproductOnDetails] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  //Shopping Cart & Counter ============================================

  const [shoppingCart, setShoppingCart] = useState([]);
  const shoppingCounter = shoppingCart.length;

  //Add the property key to each product *

  shoppingCart.map((product) => {
    product.key = uuidv4();
  });

  //Shopping Aside • CRUD:

  const addToShoppingCart = (newItem) => {
    const productIndex = shoppingCart.findIndex(
      (product) => product.id === newItem.id
    );
    let newShoppingCart = [];
    if (productIndex >= 0) {
      newShoppingCart = [...shoppingCart];
      newShoppingCart[productIndex].quantity++;
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
    setShoppingCart(newShoppingCart);
  };

  const showTotalPrice = () =>
    shoppingCart.reduce((total, product) => total + product.price, 0);

  // Orders: =====================================================
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
    // closeShoppingAside();
    // console.log(orders.length);
  };

  // Local Storage: =============================================

  const [account, setAccount] = useState({});
  const [signOut, setSignOut] = useState(false);

  const accountInLocalStorage = localStorage.getItem("account");
  const signOutLocalStorage = localStorage.getItem("sign-out");
  let parsedAccount;
  let parsedSignOut;

  if (!accountInLocalStorage) {
    localStorage.setItem("account", JSON.stringify({}));
    parsedAccount = {};
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
  }
  if (!signOutLocalStorage) {
    localStorage.setItem("sign-out", JSON.stringify(true));
    parsedSignOut = true;
  } else {
    parsedSignOut = JSON.parse(signOutLocalStorage);
  }

  // parsedAccount => To remember user after refresh
  //account => To the logic around the user data

  useEffect(() => {
    setAccount(parsedAccount);
  }, []);

  const noAccountinLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;

  const noAccountinLocalState = account
    ? Object.keys(account).length === 0
    : true;

  const hasUserAccount = !noAccountinLocalState || !noAccountinLocalStorage;
  const isUserSignOut = signOut || parsedSignOut;

  return (
    <ShoppingCartContext.Provider
      value={{
        productOnDetails,
        setproductOnDetails,

        shoppingCounter,
        shoppingCart,
        setShoppingCart,
        addToShoppingCart,
        removeFromShoppingCart,
        showTotalPrice,

        orders,
        setOrders,
        handleCheckout,

        account,
        setAccount,
        signOut,
        setSignOut,
        parsedAccount,
        parsedSignOut,
        hasUserAccount,
        isUserSignOut,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
