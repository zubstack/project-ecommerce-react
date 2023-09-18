/* eslint-disable react/prop-types */
import "./styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";
import { ShoppingCartContext } from "../../context";
import ShoppingCard from "../ShoppingCard";
import { v4 as uuidv4 } from "uuid";

function ShoppingAside({ closeShoppingAside, shoppingOpen }) {
  const { shoppingCart, shoppingCounter, handleCheckout } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={`product-detail ${
        shoppingOpen ? "flex" : "hidden"
      }   flex-col fixed right-0 border border-gray-100 rounded-lg  bg-white px-3 z-50`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xt">My order</h2>
        <button>
          <FaChevronCircleRight onClick={() => closeShoppingAside()} />
        </button>
      </div>

      <div className="px-1 flex-1 max-h-[60%] overflow-auto mb-8">
        {shoppingCart.length > 0 ? (
          shoppingCart.map((product) => (
            <ShoppingCard
              key={uuidv4()}
              data={product}
              keyId={product.key}
              hasCloseButton={true}
            />
          ))
        ) : (
          <p>{"No shoppping cart :("}</p>
        )}
      </div>
      <div className="flex justify-around">
        <Link to="/cart">
          <div
            className="w-full border border-black/80 py-3 px-8  rounded-lg"
            onClick={handleCheckout}
          >
            View cart ({shoppingCounter})
          </div>
        </Link>
        <Link to="/my-orders/last">
          <div
            className="w-full bg-black py-3 px-8 text-white rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </div>
        </Link>
      </div>
    </aside>
  );
}

export default ShoppingAside;
