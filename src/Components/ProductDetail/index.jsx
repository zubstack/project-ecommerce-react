import { FaChevronCircleRight } from "react-icons/fa";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
function ProductDetail({ closeProductDetails, detailsOpen }) {
  const { productOnDetails } = useContext(ShoppingCartContext);
  //PENDING: Details smooth appearing [absolute]
  return (
    <aside
      className={`product-detail ${
        detailsOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border rounded-lg border-black bg-white`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xt">Details</h2>
        <button>
          <FaChevronCircleRight onClick={closeProductDetails} />
        </button>
      </div>
      <div className="bg-white cursor-pointer w-full h-4/5 p-5">
        <figure className="relative mb-2 w-full h-3/5">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={productOnDetails.images[0]}
            alt="headphone"
          />
        </figure>
        <p className="flex justify-between items-center px-3 py-3">
          <span className="card-span text-lg font-medium tx-title">
            {productOnDetails.title}
          </span>
          <span className="card-span text-2xl font-medium tx-price min-w-[100px]">
            $ {productOnDetails.price}
          </span>
        </p>
        <p className="text-start font-light">{productOnDetails.description}</p>
      </div>
    </aside>
  );
}

export default ProductDetail;
