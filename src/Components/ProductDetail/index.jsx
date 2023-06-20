import { FaTimes } from "react-icons/fa";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
function ProductDetail() {
  const { closeProductDetails, detailsOpen } = useContext(ShoppingCartContext);
  return (
    <aside
      className={`product-detail ${
        detailsOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border border-black bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xt">Detail</h2>
        <button>
          <FaTimes onClick={() => closeProductDetails()} />
        </button>
      </div>
    </aside>
  );
}

export default ProductDetail;
