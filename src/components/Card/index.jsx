/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingContext";
import CardButton from "../CartButton/CartButton";

function Card({ data, openProductDetails }) {
  const { setproductOnDetails } = useContext(ShoppingCartContext);

  const showProductDetails = () => {
    openProductDetails();
    setproductOnDetails(data);
  };
  return (
    <div
      className="bg-white/10 cursor-pointer w-60 border border-black/40 rounded-lg p-2 relative"
      onClick={showProductDetails}
    >
      <figure className="relative mb-2 w-full">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.item.brand}
        </span>
        <img
          className="w-full h-40 object-cover rounded-lg"
          src={data.item.image_url}
          alt={data.item.name}
        />
      </figure>
      <div className="flex flex-col text-start">
        <span className="text-sm font-light tx-title px-1 py-3 mb-12 h-16">
          {data.item.model} - {data.item.name}
        </span>

        <span className="absolute bottom-3 left-4 flex items-center justify-between w-5/6">
          <CardButton data={data} />
          <p className="tx-price px-2 py-1 rounded-md">$ {data.item.price}</p>
        </span>
      </div>
    </div>
  );
}

export default Card;
