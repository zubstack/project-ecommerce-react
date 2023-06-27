import { useContext } from "react";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
function MyOrders() {
  const { orders } = useContext(ShoppingCartContext);

  return (
    <div>
      MyOrders
      {orders?.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${order.id}`}>
            <OrdersCard
              key={order.id}
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
            ></OrdersCard>
          </Link>
        );
      })}
    </div>
  );
}

export default MyOrders;
