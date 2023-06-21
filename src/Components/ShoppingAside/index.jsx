import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { FaTimes } from "react-icons/fa";
import ShoppingCard from "../ShoppingcCard";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";

function ShoppingAside() {
  const { closeShoppingAside, shoppingOpen, shoppingCart } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={`product-detail ${
        shoppingOpen ? "flex" : "hidden"
      } checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white p-4`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xt">My order</h2>
        <button>
          <FaTimes onClick={() => closeShoppingAside()} />
        </button>
      </div>

      <div className="px-2">
        {shoppingCart.map((product) => (
          <ShoppingCard key={uuidv4()} data={product} keyId={product.key} />
        ))}
      </div>
    </aside>
  );
}

export default ShoppingAside;