import { FaChevronRight } from "react-icons/fa";

function OrdersCard({ data }) {
  console.log(data);
  return (
    <div className="flex justify-between items-center mb-3 border border-black w-80 py-2 px-4 rounded-sm hover:bg-[#f1f5f9]">
      <div className="flex flex-col">
        <span>{data.date}</span>
        <div>
          <span className="font-light">Articles: </span>
          <span>{data.totalProducts}</span>
        </div>
      </div>
      <div className="flex items-center gap-7 ">
        <span className="font-medium text-xl tx-price">
          $ {data.totalPrice}
        </span>
        <FaChevronRight />
      </div>
    </div>
  );
}

export default OrdersCard;
