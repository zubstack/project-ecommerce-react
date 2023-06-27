function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-centermb-3 border border-black">
      <p>
        <span>01.02.23</span>
        <span>{totalPrice}</span>
        <span>{totalProducts}</span>
      </p>
    </div>
  );
}

export default OrdersCard;
