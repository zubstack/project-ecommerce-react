/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { ShoppingCartContext } from "../../context";

function ShoppingCard({ data, hasCloseButton }) {
  const { removeFromShoppingCart } = useContext(ShoppingCartContext);

  return (
    <div className="flex justify-between items-center mb-3 ">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={data?.item.image_url}
            alt=""
          />
        </figure>
        <p className="text-sm font-light text-center mr-10">
          {data?.item.name}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-lg font-medium tx-price">$ {data?.item.price}</p>
        {hasCloseButton ? (
          <FaMinusCircle
            className="h-3 w-3 text-black cursor-pointer mark-gray "
            onClick={() => removeFromShoppingCart(data)}
          ></FaMinusCircle>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ShoppingCard;
