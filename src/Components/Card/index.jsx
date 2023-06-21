import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { ShoppingCartContext } from "../../Context";
import { v4 as uuidv4 } from "uuid";

function Card({ data }) {
  let {
    openProductDetails,
    setProductToShow,
    shoppingCart,
    setShoppingCart,
    openShoppingAside,
  } = useContext(ShoppingCartContext);

  const showProductDetails = () => {
    openProductDetails();
    setProductToShow(data);
  };
  const addToShoppingCart = () => {
    const newProduct = data;
    newProduct.key = uuidv4();
    setShoppingCart([...shoppingCart, newProduct]);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={showProductDetails}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt="headphone"
        />

        <button
          onClick={(event) => {
            event.stopPropagation();
            addToShoppingCart();
            openShoppingAside();
          }}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >
          <FaPlus className="text-sm" />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="card-span text-sm font-light">{data.title}</span>
        <span className="card-span text-lg font-medium">$ {data.price}</span>
      </p>
    </div>
  );
}

export default Card;
