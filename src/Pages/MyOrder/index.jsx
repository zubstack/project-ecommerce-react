import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import ShoppingCard from "../../Components/ShoppingcCard";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

function MyOrder() {
  const { orders } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = orders?.length - 1;
  // console.log(index);

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <FaChevronLeft className="h-4 w-4 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div>
        {orders?.[index]?.products.map((product) => (
          <ShoppingCard key={product.key} data={product} keyId={product.key} />
        ))}
      </div>
    </>
  );
}

export default MyOrder;
