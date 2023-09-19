/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/ShoppingContext";

function ProductCard({ data }) {
  const { removeFromShoppingCart } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(1);
  console.log("quantity", quantity);
  return (
    <div className="flex items-center border border-white border-b-stone-200 mb-3">
      <figure className="w-[200px] h-[150px] border border-gray-300 rounded-md ">
        <img
          className="w-full h-full object-cover  rounded-sm "
          src={data?.item.image_url}
          alt=""
        />
      </figure>
      <div className="px-4 w-[300px]">
        <p className="text-md font-light text-start">
          {data?.item.model} {data?.item.name}
        </p>
        <p className=" text-sm font-bold">{data?.item.brand}</p>
        <p className="text-gray-700 text-sm font-light text-start ">
          Type: {data?.specifications.keyboard_type}
        </p>
        <p className="text-gray-700 text-sm font-light text-start mb-2">
          {data?.specifications.dimensions}
        </p>
        <button
          className="font-light underline text-sm text-gray-400"
          onClick={() => removeFromShoppingCart(data.id)}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col items-end text-end">
        <div className="flex mb-4 border rounded-md">
          <label
            className="px-2 border bg-gray-200 text-gray-600"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <input
            className="w-20 text-xl text-end text-gray-800 border border-black/70"
            name="quantity"
            type="number"
            placeholder="1"
            min="0"
            max={20}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <div className="text-sm font-light w-40 px-3">
          <p className="text-gray-400">Total:</p>
          <p className="text-lg ">
            $ {data?.item.price * (!quantity ? 1 : quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
