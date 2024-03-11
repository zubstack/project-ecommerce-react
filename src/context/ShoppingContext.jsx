import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useLocalStorage('shoppingCart', []);
  const shoppingCounter = shoppingCart.length;
  shoppingCart.map((product) => {
    product.key = uuidv4();
  });

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

  const getTotalPrice = () =>
    shoppingCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCounter,
        shoppingCart,
        setShoppingCart,
        addToShoppingCart,
        removeFromShoppingCart,
        getTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
