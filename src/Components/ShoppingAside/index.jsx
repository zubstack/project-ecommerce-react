import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { FaTimes } from "react-icons/fa";

function ShoppingAside() {
  const { closeShoppingAside, shoppingOpen } = useContext(ShoppingCartContext);
  return (
    <aside
      className={`product-detail ${
        shoppingOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border border-rounded border-black bg-white`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xt">My order</h2>
        <button>
          <FaTimes onClick={() => closeShoppingAside()} />
        </button>
      </div>
    </aside>
  );
}

export default ShoppingAside;
