import { useContext } from "react";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
function MyOrders() {
  const { orders } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Historial</h1>
      </div>

      {orders?.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard key={order.id} data={order} />
          </Link>
        );
      })}
    </>
  );
}

export default MyOrders;
