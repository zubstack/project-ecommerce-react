import { useContext } from "react";
import ShoppingCard from "../../components/ShoppingCard";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { ShoppingCartContext } from "../../context/ShoppingContext";

function Cart() {
  const { shoppingCart } = useContext(ShoppingCartContext);
  function getTotalPrice() {
    const prices = shoppingCart.map((product) => product.item.price);

    return prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }
  console.log(getTotalPrice().toFixed(2));
  return (
    <>
      <div className="flex">
        <div>
          <div className="relative items-end">
            <Link to="/" className="absolute left-0">
              <FaChevronLeft className="h-4 w-4 text-black cursor-pointer" />
            </Link>
            <h1>Cart</h1>
          </div>
          <div className="px-1 flex-1 h-[400px] overflow-auto mb-8">
            {shoppingCart?.map((product) => (
              <ShoppingCard
                key={product.key}
                data={product}
                keyId={product.key}
              />
            ))}
          </div>
          <div>
            <p>Total: {getTotalPrice()}</p>
          </div>
        </div>
        <div>
          <div className="relative items-end">
            <Link to="/" className="absolute left-0">
              <FaChevronLeft className="h-4 w-4 text-black cursor-pointer" />
            </Link>
            <h1>Cart</h1>
          </div>
          <div className="px-1 flex-1 h-[100px] overflow-auto mb-8">
            {shoppingCart?.map((product) => (
              <ShoppingCard
                key={product.key}
                data={product}
                keyId={product.key}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

//PENDING: Remove option
//PENDING: Set quantity option

export default Cart;
