import { FaTimes } from "react-icons/fa";
import "./styles.css";
function ProductDetail() {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xt">Detail</h2>
        <button>
          <FaTimes />
        </button>
      </div>
    </aside>
  );
}

export default ProductDetail;
