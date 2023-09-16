/* eslint-disable react/prop-types */
import "./styles.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
function ProductDetail({ closeProductDetails, detailsOpen }) {
  const { productOnDetails } = useContext(ShoppingCartContext);
  console.log("productOnDetails", productOnDetails);
  if (Object.keys(productOnDetails).length === 0) return;
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
            src={productOnDetails?.item.image_url}
            alt="headphone"
          />
        </figure>
        <p className="flex justify-between items-center px-3 py-3">
          <span className="card-span text-lg font-medium tx-title">
            {productOnDetails?.item.name}
          </span>
          <span className="card-span text-2xl font-medium tx-price min-w-[100px]">
            $ {productOnDetails?.item.price}
          </span>
        </p>
        <p className="text-start font-light">
          {productOnDetails?.item.description}
        </p>
        <button className="flex justify-center items-center text-center bg-black text-white  py-1 rounded-md">
          See more details
        </button>
      </div>
    </aside>
  );
}

export default ProductDetail;
