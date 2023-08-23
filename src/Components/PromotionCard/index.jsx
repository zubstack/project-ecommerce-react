import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function PromotionCard({ openProductDetails, data }) {
  let { setproductOnDetails } = useContext(ShoppingCartContext);
  const showProductDetails = () => {
    openProductDetails();
    setproductOnDetails(data);
  };
  console.log("data", data);
  return (
    <div
      onClick={showProductDetails}
      className="flex justify-around p-2 h-[200px] w-[440px] border border-black/60 mt-10 mb-5 rounded-lg relative"
    >
      <div className="absolute h-[80px] w-[80px] border border-red right-[-35px] top-[-20px] rounded-[50%] bg-red-500 text-white flex items-center justify-center text-2xl">
        - 80%
      </div>
      <div>
        <img className="h-[100%]" src={data?.images[0]} alt={data?.title} />
      </div>
      <div className="flex flex-col justify-center items-start w-[60%] p-3">
        <h1 className="mb-4">SPECIAL PRICE:</h1>
        {data?.category.name}
        <p className="text-sm font-light tx-title">{data?.title}</p>
        <p>
          PRICE:{" "}
          <span className="text-sm font-light line-through">
            ${data?.price}
          </span>
          <span className="absolute right-8 text-2xl bottom-4">
            ${data?.price ? (data.price * 0.8).toFixed(2) : ""}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PromotionCard;
