/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { ShoppingCartContext } from "../../context/ShoppingContext";

function ShoppingCard({ data, hasCloseButton }) {
  const { removeFromShoppingCart } = useContext(ShoppingCartContext);

  return (
    <div className="flex justify-between items-center border border-white border-b-stone-200 mb-3 ">
      <div className="flex items-center mb-4">
        <figure className="w-[120px] h-[100px] border border-gray-300 rounded-md mr-4">
          <img
            className="w-full h-full object-cover  rounded-sm "
            src={data?.item.image_url}
            alt=""
          />
        </figure>
        <p className="text-sm font-light text-start mr-10">
          {data?.item.model} {data?.item.name}
        </p>
      </div>
      <p className="text-sm font-light w-[80px]">$ {data?.item.price}</p>
      {hasCloseButton ? (
        <FaMinusCircle
          className="h-3 w-3 text-black cursor-pointer mark-gray ml-4"
          onClick={() => removeFromShoppingCart(data)}
        ></FaMinusCircle>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShoppingCard;
