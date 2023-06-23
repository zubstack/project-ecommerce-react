import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ShoppingCartContext } from "../../Context";

function ShoppingCard({ data }) {
  const { removeFromShoppingCart } = useContext(ShoppingCartContext);

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={data.images[0]}
            alt=""
          />
        </figure>
        <p className="text-sm font-light text-center">{data.title}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-lg font-medium tx-price">$ {data.price}</p>
        <FaTimes
          className="h-3 w-3 text-black cursor-pointer mark-gray "
          onClick={() => removeFromShoppingCart(data)}
        ></FaTimes>
      </div>
    </div>
  );
}

export default ShoppingCard;
