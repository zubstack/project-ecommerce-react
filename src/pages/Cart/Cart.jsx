import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingContext";
import Summary from "../../components/Summary/Summary";
import ProductCard from "../../components/ProductCard/ProductCard";

function Cart() {
  const { shoppingCart } = useContext(ShoppingCartContext);
  function getTotalPrice() {
    const prices = shoppingCart.map((product) => product.item.price);

    return prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }
  console.log("shoppingCart", shoppingCart);
  if (!shoppingCart.length) {
    return (
      <>
        <div className="mt-20">
          <h1>{"No shopping cart :("}</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex gap-20">
        <div className=" p-4 mt-4 w-[700px] ">
          <div>
            <h1 className="text-2xl font-light mb-4">My Cart</h1>
          </div>
          <div className="px-1 overflow-auto h-[70vh]">
            {shoppingCart?.map((product) => (
              <ProductCard key={product.key} data={product} />
            ))}
          </div>
        </div>
        <Summary total={getTotalPrice()} />
      </div>
    </>
  );
}

//PENDING: Remove option
//PENDING: Set quantity option

export default Cart;
