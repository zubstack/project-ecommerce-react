import { FaTimes } from "react-icons/fa";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
function ProductDetail() {
  const { closeProductDetails, detailsOpen, productToShow } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={`product-detail ${
        detailsOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border border-black bg-white`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xt">Details</h2>
        <button>
          <FaTimes onClick={() => closeProductDetails()} />
        </button>
      </div>
      <div className="bg-white cursor-pointer w-full h-4/5 p-5">
        <figure className="relative mb-2 w-full h-3/5">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={productToShow.images[0]}
            alt="headphone"
          />
        </figure>
        <p className="flex justify-between">
          <span className="card-span text-sm font-light">
            {productToShow.title}
          </span>
          <span className="card-span text-lg font-medium">
            $ {productToShow.price}
          </span>
        </p>
        <p className="text-start">{productToShow.description}</p>
      </div>
    </aside>
  );
}

export default ProductDetail;
