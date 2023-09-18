/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function PromotionCard({ openProductDetails, data }) {
  let { setproductOnDetails } = useContext(ShoppingCartContext);
  const showProductDetails = () => {
    openProductDetails();
    setproductOnDetails(data);
  };

  return (
    <div
      onClick={showProductDetails}
      className="flex justify-around p-2 h-[200px] w-[440px] border border-black/60 rounded-lg relative bg-slate-100"
    >
      <div className="absolute h-[80px] w-[80px] border border-red right-[-35px] top-[-20px] rounded-[50%] bg-red-500 text-white flex items-center justify-center text-2xl">
        - 80%
      </div>
      <div>
        <img
          className="h-[100%]"
          src={data?.item.image_url}
          alt={data?.item.name}
        />
      </div>
      <div className="flex flex-col justify-center items-start w-[60%] p-3">
        <h1 className="mb-1">SPECIAL PRICE:</h1>
        <span className="absolute bottom-1 left-4 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0 ">
          {data?.item.brand}
        </span>
        <p className="text-sm font-light tx-title text-start mb-5">
          {data?.item.name}
        </p>
        <p>
          PRICE:{" "}
          <span className="text-sm font-light line-through">
            ${data?.item.price}
          </span>
          <span className="absolute right-8 text-2xl bottom-4 tx-price">
            ${data?.item.price ? (data?.item.price * 0.8).toFixed(2) : ""}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PromotionCard;
