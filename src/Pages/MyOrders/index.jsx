import { useContext } from "react";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
function MyOrders() {
  const { orders } = useContext(ShoppingCartContext);

  return (
    <>
      <h1>My Orders</h1>

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
