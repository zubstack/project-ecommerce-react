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
      <div className="bg-white cursor-pointer w-full h-4/5 p-3">
        <figure className="relative mb-2 w-full h-2/5">
          <img
            className="w-full h-full object-cover rounded-lg"
            src=""
            alt="headphone"
          />
        </figure>
        <p className="flex justify-between">
          <span className="card-span text-sm font-light">`data.title`</span>
          <span className="card-span text-lg font-medium">`data.price`</span>
        </p>
        <p className="text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
          incidunt. Animi molestiae possimus cupiditate nobis distinctio soluta
          temporibus tempore laboriosam ea placeat vel ipsa, doloribus saepe
          labore ipsam delectus necessitatibus.
        </p>
      </div>
    </aside>
  );
}

export default ProductDetail;
