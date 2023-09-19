/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaCartPlus, FaCheckCircle } from "react-icons/fa";
import { ShoppingCartContext } from "../../context/ShoppingContext";

function CartButton({ data }) {
  const { shoppingCart, addToShoppingCart, openShoppingAside } =
    useContext(ShoppingCartContext);
  const index = shoppingCart.findIndex((product) => product.id === data.id);
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        addToShoppingCart(data);
        openShoppingAside();
      }}
      className="flex justify-center items-center text-center  text-white w-20  rounded-md"
    >
      {shoppingCart[index]?.quantity ? (
        <FaCheckCircle className="text-xl bg-sky-700 w-full h-[30px] py-1 rounded-md hover:bg-sky-900" />
      ) : (
        <FaCartPlus className="text-xl bg-black/90 w-full h-[30px] py-1 rounded-md hover:bg-black" />
      )}
    </button>
  );
}

export default CartButton;
