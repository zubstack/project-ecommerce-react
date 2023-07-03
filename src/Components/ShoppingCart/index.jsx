import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ShoppingCartContext } from "../../Context";

function ShoppingCart() {
  const { shoppingCounter } = useContext(ShoppingCartContext);

  return (
    <div className="flex items-center gap-1">
      <FaShoppingCart />
      <span className="button__badge">{shoppingCounter}</span>
    </div>
  );
}

export default ShoppingCart;
