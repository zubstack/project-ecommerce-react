import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import ShoppingCard from "../../Components/ShoppingcCard";

function MyOrder() {
  const { orders } = useContext(ShoppingCartContext);
  console.log(orders.slice(-1)[0]?.products);

  return (
    <>
      <h1>My last order</h1>
      <div>
        {orders.slice(-1)[0]?.products.map((product) => (
          <ShoppingCard key={product.key} data={product} keyId={product.key} />
        ))}
      </div>
    </>
  );
}

export default MyOrder;
