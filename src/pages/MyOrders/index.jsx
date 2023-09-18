import { useContext } from "react";
import OrdersCard from "../../components/OrdersCard";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingContext";
function MyOrders() {
  const { orders } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">History</h1>
      </div>
      {orders?.length !== 0 ? (
        orders.map((order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard key={order.id} data={order} />
            </Link>
          );
        })
      ) : (
        <p> {"No orders yet :("}</p>
      )}
    </>
  );
}

export default MyOrders;
